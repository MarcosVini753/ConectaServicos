"use strict";
(function(){
  const toggle=document.querySelector("[data-menu-toggle]");
  const nav=document.querySelector("#menu-principal");
  if(toggle&&nav){
    const setOpen=(open)=>{
      toggle.setAttribute("aria-expanded",String(open));
      toggle.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");
      nav.classList.toggle("is-open",open);
    };
    toggle.addEventListener("click",()=>setOpen(toggle.getAttribute("aria-expanded")!=="true"));
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setOpen(false)));
    document.addEventListener("keydown",e=>{if(e.key==="Escape")setOpen(false);});
    document.addEventListener("click",e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))setOpen(false);});
  }
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=String(new Date().getFullYear()));
  const category=new URLSearchParams(location.search).get("categoria");
  if(category){
    const select=document.querySelector('select[name="categoria"]');
    if(select&&Array.from(select.options).some(option=>option.value===category)){select.value=category;}
  }
  document.querySelectorAll("textarea[data-counter]").forEach(area=>{
    const counter=document.querySelector('[data-count-for="'+area.name+'"]');
    const update=()=>{if(counter)counter.textContent=area.value.length+"/"+area.maxLength;};
    area.addEventListener("input",update);update();
  });
  const local=location.protocol==="file:"||["localhost","127.0.0.1"].includes(location.hostname);
  if(local){
    document.querySelectorAll("form[data-demo-form]").forEach(form=>{
      form.addEventListener("submit",event=>{
        event.preventDefault();
        const msg=form.querySelector(".local-form-warning");
        if(msg){msg.hidden=false;msg.textContent="Demonstração local: o formulário não foi enviado. Publique no Netlify, habilite a detecção de formulários e faça um novo deploy para testar o recebimento real.";msg.scrollIntoView({behavior:"smooth",block:"center"});}
      });
    });
  }
})();
