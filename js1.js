var all_pg=['ahm1','ahm2','ahm3','ahm4','ana1','ana2','ana3','gan1','gan2','gan3','gan4'];
var ahm_pg=['ahm1','ahm2','ahm3','ahm4'];
var ana_pg=['ana1','ana2','ana3'];
var gan_pg=['gan1','gan2','gan3','gan4'];
var ahmpg_desp=[["boy","3","yes",15,"ahm1"],["boy","2","yes",15,"ahm2"],["girl","2","yes",9,"ahm3"],["both","3","yes",19,"ahm4"]];
var anapg_desp=[["girl","3","yes",5,"ana1"],["girl","2","yes",10,"ana2"],["both","2","yes",13,"ana3"]];
var ganpg_desp=[["boy","3","yes",12,"gan1"],["boy","2","yes",10,"gan2"],["girl","1","yes",12,"gan3"],["both","3","yes",7,"gan4"]];

function go(){
    for(var i=0;i<11;i++)
    {
        document.getElementById(all_pg[i]).style.display='none';
    }
    document.getElementById("form1").reset();
    document.getElementById("empty").style.display='none';
    var a=document.getElementById('city').value;
    var ah="ahmedabad";
    var an="anand";
    var ga="gandhinagar";
    var ahm="https://www.google.com/maps/d/embed?mid=1Sf5u36ImZxVK7cd_Nu4d1QRmZsOpeww&hl=en&ehbc=2E312F";
    var ana="https://www.google.com/maps/d/embed?mid=1SNDBXjG0eWVYjoibWneYEjVSrY58BLk&ehbc=2E312F";
    var gan="https://www.google.com/maps/d/embed?mid=1TNaHeG2LrY2wuOXTis09242SsKpNV_8&ehbc=2E312F";
    if(a==ah)
    {
        document.getElementById('myframe').src=ahm;
        document.getElementById('city1').innerText="Ahmedabad";
        for(var i=0;i<4;i++)
        {
            document.getElementById(ahm_pg[i]).style.display='block';
        }
    }
    else if(a==an)
    {
        document.getElementById('myframe').src=ana;
        document.getElementById('city1').innerText="Anand";
        for(var i=0;i<3;i++)
        {
            document.getElementById(ana_pg[i]).style.display='block';
        }
    }
    else
    {
        document.getElementById('myframe').src=gan;
        document.getElementById('city1').innerText="Gandhinagar";
        for(var i=0;i<4;i++)
        {
            document.getElementById(gan_pg[i]).style.display='block';
        }
    }
    
}
function go1()
{
    var a=document.getElementById('city').value;
    var ah="ahmedabad";
    var an="anand";
    var ga="gandhinagar";
    var d=0;
    for(var i=0;i<11;i++)
    {
        document.getElementById(all_pg[i]).style.display='none';
    }
    var gen=document.getElementById("gender").value;
    var share=document.getElementById("room").value;
    var food=document.getElementById("food").value;
    var rent=document.getElementById("rent").value;
    if(a==ah)
    {
        for(var i=0;i<4;i++)
        {
            var c=0;
            if(ahmpg_desp[i][0]==gen || gen=="any") c++;
            if(ahmpg_desp[i][1]==share || share=="any") c++;
            if(ahmpg_desp[i][2]==food || food=="any") c++;
            if(ahmpg_desp[i][3]<=rent || rent=="any") c++;
            if(c==4)
            {
                document.getElementById(ahm_pg[i]).style.display='block';
                d++;
            }

        }

    }
    else if(a==an)
    {
        for(var i=0;i<3;i++)
        {
            var c=0;
            if(anapg_desp[i][0]==gen || gen=="any") c++;
            if(anapg_desp[i][1]==share || share=="any") c++;
            if(anapg_desp[i][2]==food || food=="any") c++;
            if(anapg_desp[i][3]<=rent || rent=="any") c++;
            if(c==4)
            {
                document.getElementById(ana_pg[i]).style.display='block';
                d++;
            }

        }
    }
    else
    {
        for(var i=0;i<4;i++)
        {
            var c=0;
            if(ganpg_desp[i][0]==gen || gen=="any") c++;
            if(ganpg_desp[i][1]==share || share=="any") c++;
            if(ganpg_desp[i][2]==food || food=="any") c++;
            if(ganpg_desp[i][3]<=rent || rent=="any") c++;
            if(c==4)
            {
                document.getElementById(gan_pg[i]).style.display='block';
                d++;
            }

        }
    }
    if(d==0)
    {
        document.getElementById("empty").style.display='block';
    }
    else{
        document.getElementById("empty").style.display='none';
    }
}

function go3()
{
    var a=document.getElementById('city').value;
    var ah="ahmedabad";
    var an="anand";
    var ga="gandhinagar";
    
    if(a==ah)
    {
        for(var i=0;i<4;i++)
        {
            document.getElementById(ahm_pg[i]).style.display='block';
        }
    }
    else if(a==an)
    {
        for(var i=0;i<3;i++)
        {
            document.getElementById(ana_pg[i]).style.display='block';
        }
    }
    else
    {

        for(var i=0;i<4;i++)
        {
            document.getElementById(gan_pg[i]).style.display='block';
        }
    }
    document.getElementById("empty").style.display='none';
}
var list=[];
function go4(a){
    list.push(a);
    localStorage.setItem('x',JSON.stringify(list));
}
