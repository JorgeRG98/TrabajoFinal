document.getElementById('ok').onclick=opciones;

function opciones()
{
  if (document.getElementById('maruchan').checked)
  {
    document.write("Te invito a una maruchan");
  }
  
  else if (document.getElementById('coca').checked)
  {
    document.write("Te invito una coca");
  }
  
  else if (document.getElementById('cheetos').checked)
  {
    document.write("Te invito unos cheetos");
  }
  
  else if (document.getElementById('eskite')
  .checked)
  {
    document.write("Te invito in eskite");
  }
  
  else if (document.getElementById('horchata').checked)
  {
    document.write("Te invito una horchata de coco");
  }
  
  else
  {
    document.write("No te invito a nada, ni modo")
  }
}