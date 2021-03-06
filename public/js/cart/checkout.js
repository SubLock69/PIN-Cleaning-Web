async function checkout() {
  //Grab required attributes
  const emailto = prompt('What is your email?', 'guest@guest.com');
  const appointment = prompt('What day would you like this done (mm/dd/yyyy)?','Today');
  const payType = document.getElementById('paytype').checked ? 'Cash' : 'Card';
  const cart = window.cart ?? JSON.parse(sessionStorage.getItem('cart'));
  const date = new Date();
  const orderdate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
  let emailbody = 
  `Order Date: ${orderdate}\nOrder from ${emailto}:\nWould like done by: ${appointment}\n\nPayment format: ${payType}\n\nOrder:\n`;

  //Build email structure from the cart
  let totalPrice = document.getElementById('total').children[1].textContent;
  let totalItems = 0;
  cart.forEach(item => {
    ++totalItems;
    emailbody += ` - ${item.name}\n`;
  });
  emailbody += `\nTotal Items: ${totalItems}\nTotal: ${totalPrice}\n\n`;
  // alert(emailbody);
  // emailbody = encodeURIComponent(emailbody);

  //Send email
  const mail = await fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'pinc-order-mailer@thepriceisnicecleaning.com',
      to: 'clarenceprice@thepriceisnicecleaning.com',
      subject: 'Order from '+emailto,
      text: emailbody
    })
  });
  if(mail.status !== 200) {
    alert('Failed to send order!');
  }
  // window.location = `mailto:clarenceprice@thepriceisnicecleaning.com?subject=Order%20from%20${emailto}&body=${emailbody}`;
  
}