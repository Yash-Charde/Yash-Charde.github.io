  const sections = ['home','about','experience','projects','research','skills','contact'];
  const railItems = document.querySelectorAll('#railNav li');
  const mobileLinks = document.querySelectorAll('#mobileBar a');
  const trackFill = document.getElementById('trackFill');

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        const idx = sections.indexOf(id);
        railItems.forEach((li,i)=>li.classList.toggle('active', i===idx));
        mobileLinks.forEach((a,i)=>a.classList.toggle('active', i===idx));
        if(idx>=0 && trackFill){
          const activeLi = railItems[idx];
          trackFill.style.top = activeLi.offsetTop + 'px';
          trackFill.style.height = activeLi.offsetHeight + 'px';
        }
      }
    });
  }, {rootMargin:'-40% 0px -55% 0px', threshold:0});

  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el) observer.observe(el);
  });
