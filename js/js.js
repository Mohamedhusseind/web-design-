function validate()
{
    name=document.contact_login.name.value;
    if(name==""||name==null)
        {
            document.getElementById("name").placeholder="Enter name";
            document.getElementById("name").placeholder.color="red";
        }
}
function validateweb()
{
    web=document.contact_login.website.value;
    if(web==""||web==null)
        {
            document.getElementById("span_web").value="Enter name";
            document.getElementById("span_web").style.color="red";
        }
}