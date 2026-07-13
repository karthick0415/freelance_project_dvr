
    /* ── STREAM → COURSE OPTIONS ── */
    var COURSE_MAP = {
      'Engineering': [
        'CSE – Computer Science & Engineering',
        'CSE – Artificial Intelligence & Machine Learning',
        'CSE – Artificial Intelligence & Data Science',
        'CSE – Cyber Security',
        'CSE – Data Science',
        'CSE – IoT (Internet of Things)',
        'CSE – Full Stack Development',
        'CSE – Cloud Computing',
        'CSE – Blockchain Technology',
        'IT – Information Technology',
        'ECE – Electronics & Communication',
        'EEE – Electrical & Electronics',
        'Mechanical Engineering',
        'Civil Engineering',
        'Aeronautical Engineering',
        'Automobile Engineering',
        'Biomedical Engineering',
        'Chemical Engineering',
        'Marine Engineering',
        'Mechatronics Engineering',
        'Robotics & Automation',
        'Other Engineering'
      ],
      'Medical': [
        'MBBS',
        'BDS – Dentistry',
        'BHMS – Homeopathy',
        'BSMS – Siddha',
        'BNYS – Naturopathy',
        'Other Medical'
      ],
      'Arts & Science': [
        'B.Sc – Computer Science',
        'B.Sc – Information Technology',
        'B.Sc – Mathematics',
        'B.Sc – Physics',
        'B.Sc – Chemistry',
        'B.Sc – Biotechnology',
        'B.Sc – Microbiology',
        'B.Sc – Zoology',
        'B.Sc – Botany',
        'B.Sc – Data Science',
        'B.Sc – Forensic Science',
        'B.Sc – Visual Communication',
        'B.Sc – Psychology',
        'B.Sc – Nutrition & Dietetics',
        'B.Sc – Agriculture',
        'B.Sc – Animation',
        'B.A – English',
        'B.A – Tamil',
        'B.A – Economics',
        'B.A – History',
        'B.A – Political Science',
        'B.Com – General',
        'B.Com – Computer Application',
        'B.Com – Accounting & Finance',
        'B.Com – Corporate Secretaryship',
        'BCA – Computer Application',
        'BCA – Data Science',
        'BCA – Cyber Security',
        'Other Arts & Science'
      ],
      'Management': [
        'MBA – Master of Business Administration',
        'BBA – Business Administration',
        'BBA – Aviation Management',
        'BBA – Logistics',
        'BBA – Digital Marketing',
        'BBA – Finance',
        'BBA – Human Resource',
        'BBA – Marketing',
        'Other Management'
      ],
      'Law': [
        'LLB – Bachelor of Law',
        'B.A LLB – Integrated',
        'B.Com LLB – Integrated',
        'BBA LLB – Integrated',
        'LLM – Master of Law',
        'Other Law'
      ],
      'Pharmacy': [
        'B.Pharm – Bachelor of Pharmacy',
        'D.Pharm – Diploma in Pharmacy',
        'Pharm.D',
        'M.Pharm',
        'Other Pharmacy'
      ],
      'Nursing & Allied Health': [
        'B.Sc Nursing',
        'GNM – General Nursing & Midwifery',
        'ANM – Auxiliary Nursing',
        'BPT – Physiotherapy',
        'Medical Lab Technology',
        'Radiology & Imaging Technology',
        'Operation Theatre Technology',
        'Dialysis Technology',
        'Cardiac Technology',
        'Optometry',
        'Respiratory Care Technology',
        'Other Allied Health'
      ],
      'Architecture': [
        'B.Arch – Architecture',
        'M.Arch – Master of Architecture',
        'B.Des – Interior Design',
        'B.Des – Fashion Design',
        'Other Architecture'
      ],
      'Diploma / Polytechnic': [
        'Diploma – CSE',
        'Diploma – ECE',
        'Diploma – EEE',
        'Diploma – Mechanical',
        'Diploma – Civil',
        'Diploma – Automobile',
        'Diploma – Chemical',
        'Diploma – Marine',
        'Diploma – Medical Lab Technology',
        'Other Diploma'
      ],
      'Other': ['Other / Not Listed']
    };

    function updateCourseOptions() {
      var stream = document.getElementById('fstream').value;
      var courseEl = document.getElementById('fcourse');
      courseEl.innerHTML = '';
      if (!stream) {
        courseEl.innerHTML = '<option value="">— Select Stream First —</option>';
        return;
      }
      var options = COURSE_MAP[stream] || ['Other'];
      courseEl.innerHTML = '<option value="">Select Course</option>';
      options.forEach(function(c) {
        var opt = document.createElement('option');
        opt.value = c; opt.textContent = c;
        courseEl.appendChild(opt);
      });
    }


  
    'use strict';
    /* STICKY NAVBAR */
    var navbar = document.getElementById('navbar'), stBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', function () { var y = window.scrollY; navbar && navbar.classList.toggle('scrolled', y > 60); stBtn && stBtn.classList.toggle('show', y > 400); highlightNav(y); }, { passive: true });
    function highlightNav(y) { var cur = ''; document.querySelectorAll('section[id]').forEach(function (s) { if (y >= s.offsetTop - 130) cur = s.id; }); document.querySelectorAll('.nav-link').forEach(function (a) { a.classList.remove('active'); if (a.getAttribute('href') === '#' + cur) a.classList.add('active'); }); }

    /* MOBILE DRAWER */
    var hbg = document.getElementById('hamburger'), drw = document.getElementById('mobDrawer'), bkd = document.getElementById('mobBackdrop'), mbc = document.getElementById('mobClose');
    function openDrw() { drw.classList.add('open'); bkd.classList.add('show'); document.body.classList.add('no-scroll'); }
    function closeDrw() { drw.classList.remove('open'); bkd.classList.remove('show'); document.body.classList.remove('no-scroll'); }
    hbg && hbg.addEventListener('click', openDrw); mbc && mbc.addEventListener('click', closeDrw); bkd && bkd.addEventListener('click', closeDrw);
    document.querySelectorAll('.mob-link,.mob-cta-btn').forEach(function (a) { a.addEventListener('click', closeDrw); });

    /* REVEAL */
    var ro = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('revealed'); }); }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { ro.observe(el); });

    /* COUNTERS */
    var cS = false, cSec = document.getElementById('counters');
    if (cSec) new IntersectionObserver(function (entries) { if (entries[0].isIntersecting && !cS) { cS = true; document.querySelectorAll('.count').forEach(function (el) { var t = +el.dataset.target, s = t / 80, c = 0; var ti = setInterval(function () { c = Math.min(c + s, t); el.textContent = Math.floor(c).toLocaleString(); if (c >= t) clearInterval(ti); }, 25); }); } }, { threshold: 0.3 }).observe(cSec);

    /* TYPING */
    var words = ['Engineering Colleges 🏗️', 'Medical Colleges 🏥', 'Arts & Science 📖', 'Law Colleges ⚖️', 'Management Courses 📊', 'Computer Science (CSE) 💻', 'Top Colleges in Tamil Nadu 🎓'], wi = 0, ci = 0, dl = false;
    function typeIt() { var el = document.getElementById('typingText'); if (!el) return; var w = words[wi]; el.textContent = dl ? w.substring(0, ci--) : w.substring(0, ci++); if (!dl && ci > w.length) { dl = true; setTimeout(typeIt, 1400); return; } if (dl && ci < 0) { dl = false; wi = (wi + 1) % words.length; setTimeout(typeIt, 300); return; } setTimeout(typeIt, dl ? 45 : 85); }
    typeIt();

    /* ======== FILTER ======== */

    /* Shorthand aliases for global search */
    var SEARCH_ALIASES = {
      'cse':'computer science and engineering','ece':'electronics and communication','eee':'electrical and electronics',
      'mech':'mechanical engineering','civil':'civil engineering','it':'information technology',
      'aiml':'artificial intelligence and machine learning','aids':'artificial intelligence and data science',
      'ai':'artificial intelligence','ds':'data science','cs':'computer science',
      'bca':'bachelor of computer applications','bba':'bachelor of business administration',
      'bcom':'bachelor of commerce','b.com':'bachelor of commerce',
      'mba':'master of business administration','mca':'master of computer applications',
      'mbbs':'bachelor of medicine and bachelor of surgery','bds':'bachelor of dental surgery',
      'bpt':'bachelor of physiotherapy','bpharm':'bachelor of pharmacy','b.pharm':'bachelor of pharmacy',
      'bsc':'bachelor of science','b.sc':'bachelor of science','ba':'bachelor of arts','b.a':'bachelor of arts',
      'llb':'bachelor of law','be':'bachelor of engineering','b.e':'bachelor of engineering',
      'btech':'bachelor of technology','b.tech':'bachelor of technology',
      'barch':'bachelor of architecture','b.arch':'bachelor of architecture',
      'pharm':'pharmacy','ahs':'allied health science','gnm':'general nursing and midwifery',
      'anm':'auxiliary nursing','marine':'marine engineering','aero':'aeronautical engineering',
      'auto':'automobile engineering','biomedical':'biomedical engineering','biotech':'biotechnology',
      'food':'food technology','chem':'chemical engineering','robotics':'robotics','vlsi':'vlsi',
      'cyber':'cyber security','iot':'internet of things','cloud':'cloud','blockchain':'blockchain',
      'agri':'agriculture','yoga':'yoga','siddha':'siddha','mlt':'medical laboratory',
      'ot':'operation theatre','radiology':'radiology','dialysis':'dialysis','optometry':'optometry'
    };

    function expandSearchQuery(q) {
      var lower = q.toLowerCase().trim();
      if (SEARCH_ALIASES[lower]) return SEARCH_ALIASES[lower];
      var keys = Object.keys(SEARCH_ALIASES);
      for (var i = 0; i < keys.length; i++) {
        if (lower.startsWith(keys[i] + ' ') || lower.endsWith(' ' + keys[i])) return lower.replace(keys[i], SEARCH_ALIASES[keys[i]]);
      }
      return lower;
    }

    /* ── Get all checked checkbox values for a given name (excludes "All" value="") ── */
    function getCheckedVals(name) {
      var vals = [];
      document.querySelectorAll('input[name="' + name + '"]:checked').forEach(function(el) {
        if (el.value !== '') vals.push(el.value.toLowerCase());
      });
      return vals;
    }

    /* ── Handle "All …" checkbox: uncheck all others when All is checked ── */
    function handleAllCheck(el) {
      var name = el.name;
      if (el.checked) {
        /* Uncheck every sibling non-all checkbox */
        document.querySelectorAll('input[name="' + name + '"]:not(.fp-all-check)').forEach(function(cb) { cb.checked = false; });
      }
      applyFilter();
    }

    /* ── When any specific option is checked, uncheck the "All" checkbox ── */
    function handleOptionCheck(el) {
      var name = el.name;
      if (el.checked) {
        var allCb = document.querySelector('input[name="' + name + '"].fp-all-check');
        if (allCb) allCb.checked = false;
      }
      applyFilter();
    }

    var DEPT_MAP = { "cse": ["computer science and engineering","computer science & engineering","cse)","- cse","(cse"], "cse ai ml": ["ai & ml","ai and ml","aiml","artificial intelligence and machine learning","artificial intelligence & machine learning","(ai & ml)","(ai&ml)","ai/ml"], "cse ai ds": ["artificial intelligence and data science","artificial intelligence & data science","ai and data science","& data science","ai & ds","aids)"], "cse cyber security": ["cyber security","cybersecurity"], "cse data science": ["data science"], "cse iot": ["internet of things","iot)","(iot"], "cse blockchain": ["blockchain"], "cse cloud": ["cloud computing","cloud technology","cloud devops"], "cse vlsi": ["vlsi"], "cse generative ai": ["generative ai"], "cse full stack": ["full stack"], "cse robotics": ["robotics and intelligent","robotics & intelligent"], "cse quantum": ["quantum computing"], "computing technologies": ["computing technologies"], "it": ["- information technology","b.e - information science"], "ece": ["electronics and communication engineering","electronics & communication engineering"], "eee": ["electrical and electronics engineering","electrical & electronics engineering"], "mechanical engineering": ["mechanical engineering"], "civil engineering": ["civil engineering"], "aeronautical engineering": ["aeronautical engineering"], "aerospace engineering": ["aerospace engineering"], "automobile engineering": ["automobile engineering"], "biomedical engineering": ["biomedical engineering","bio-medical engineering","bio medial","biomedical engineering"], "mechatronics engineering": ["mechatronics"], "robotics automation engineering": ["robotics and automation","automation and robotics"], "marine engineering": ["marine engineering"], "chemical engineering": ["chemical engineering"], "agricultural engineering": ["agricultural engineering","agriculture engineering"], "fire safety engineering": ["fire technology","fire and safety","safety and fire","safety engineering"], "nanotechnology": ["nanotechnology","nano science"], "petroleum engineering": ["petroleum engineering"], "petrochemical engineering": ["petrochemical engineering","petrochemical technology"], "naval architecture": ["naval architecture"], "food technology engineering": ["food technology"], "fashion technology engineering": ["fashion technology"], "genetic engineering": ["genetic engineering"], "industrial biotechnology": ["industrial biotechnology"], "biotechnology engineering": ["biotechnology and biochemical"], "pharmaceutical technology engineering": ["pharmaceutical technology"], "lateral entry be btech": ["lateral entry"], "bsc computer science": ["b.sc - computer science","b.sc computer science","b.sc. computer science"], "bsc information technology": ["b.sc - information technology","b.sc information technology","b.sc. information technology"], "bsc computer technology": ["b.sc - computer technology","b.sc computer technology","b.sc. computer technology"], "bsc mathematics": ["b.sc - mathematics","b.sc mathematics","b.sc. - mathematics","b.sc - maths"], "bsc physics": ["b.sc - physics","b.sc physics","b.sc. - physics","b.sc. physics"], "bsc chemistry": ["b.sc - chemistry","b.sc chemistry"], "bsc microbiology": ["b.sc - microbiology","b.sc microbiology","b.sc. microbiology"], "bsc biotechnology": ["b.sc - biotechnology","b.sc biotechnology","b.sc. biotechnology","b.sc - bio-technology"], "bsc biochemistry": ["b.sc - biochemistry"], "bsc zoology": ["b.sc - zoology"], "bsc botany": ["b.sc - botany"], "bsc forensic science": ["b.sc - forensic science","b.sc forensic science"], "bsc data science": ["b.sc - data science","b.sc data science","b.sc. data science"], "bsc cyber security": ["b.sc - cyber security","b.sc - computer science (cyber","b.sc computer science with cyber"], "bsc visual communication": ["b.sc - visual communication","b.sc visual communication","b.sc. visual communication"], "bsc nutrition dietetics": ["b.sc - nutrition","nutrition and dietetics","nutrition & dietetics"], "bsc fashion technology": ["b.sc - fashion technology","b.sc - costume","costume design and fashion"], "bsc hotel management": ["b.sc - hotel management","b.sc - catering and hotel","hotel management & catering"], "bsc astrophysics": ["b.sc - astrophysics"], "bsc psychology": ["b.sc - psychology"], "bsc statistics": ["b.sc - statistics"], "bsc animation": ["b.sc - animation","b.sc - multimedia","b.sc (hons) - animation"], "bsc agriculture": ["b.sc - agriculture","b.sc agriculture","b.sc (hons) - agriculture","b.sc (hons) - horticulture"], "bsc ai ml science": ["b.sc - artificial intelligence","b.sc artificial intelligence","b.sc. artificial intelligence","b.sc (ai & ml)"], "ba english": ["b.a - english","b.a. - english","ba - english","b.a (hons) - english"], "ba tamil": ["b.a - tamil","b.a. tamil","ba - tamil"], "ba economics": ["b.a - economics"], "ba history": ["b.a - history"], "ba political science": ["b.a - political science","b.a. political science"], "ba criminology": ["b.a - criminology","b.a. criminology","criminology and police"], "ba defence": ["b.a - defence","b.a - defense","ba defence"], "ba digital marketing": ["b.a - digital marketing"], "ba public administration": ["b.a - public administration"], "ba social work": ["b.a - social work"], "ba arabic": ["b.a - arabic"], "ba journalism": ["b.a - journalism","b.a. journalism"], "bcom general": ["b.com - general","b.com - regular","b.com - bachelor of commerce","b.com - commerce"], "bcom ca": ["b.com - computer application","b.com (ca)","b.com ca","b.com computer applications"], "bcom accounting finance": ["b.com - accounting","b.com - accounts and finance","b. com accounting","b.com accounting"], "bcom corporate secretaryship": ["b.com - corporate secretaryship","b.com corporate secretaryship"], "bcom fintech": ["b.com - fintech"], "bcom banking insurance": ["b.com - banking","b. com banking"], "bcom it": ["b.com - information technology","b.com information technology","b.com it"], "bcom professional accounting": ["b.com - professional accounting","b.com professional accounting"], "bcom cma": ["b.com - cma"], "bcom logistics": ["b.com - logistics"], "bcom international business": ["b.com - international","b.com international"], "bca": ["b.c.a - bachelor of computer","b.c.a - computer application","bca - bachelor","bca: bachelor","bca: master"], "bca data science": ["b.c.a - data science"], "bca cyber security": ["b.c.a - cyber security"], "bca cloud": ["b.c.a - cloud technology"], "bca ai": ["b.c.a - artificial intelligence"], "bca full stack": ["b.c.a - full stack"], "bba general": ["b.b.a - bachelor of business","b.b.a - business administration","bba - bachelor","bba bachelor"], "bba aviation": ["b.b.a - aviation","bba - aviation","b.b.a. airline","bba - airline"], "bba logistics": ["b.b.a - logistics","bba - logistics","b.b.a logistics","bba logistics"], "bba hr": ["bba - human resource"], "bba finance": ["bba - finance","b.b.a - financial"], "bba marketing": ["bba - marketing"], "bba business analytics": ["b.b.a - business analytics","bba - business analytics"], "bba digital marketing": ["b.b.a. - digital marketing","bba - digital marketing","b.b.a. digital marketing"], "bba fintech": ["bba - fintech"], "bba sports": ["bba - sports"], "bsc nursing": ["b.sc - nursing","b.sc nursing","b.sc. nursing"], "gnm": ["gnm","general nursing and midwifery"], "anm": ["anm","auxiliary nursing"], "bpt physiotherapy": ["b.p.t","bpt - bachelor","physiotherapy","bachelor of physiotherapy"], "medical lab technology": ["medical laboratory technology","medical lab technology","b.sc- medical lab","dmlt"], "radiology imaging": ["radiology","radiography","medical radiology","medical imaging"], "operation theatre anaesthesia": ["operation theatre","anaesthesia","anesthesia"], "dialysis technology": ["dialysis"], "cardiac technology": ["cardiac technology","cardiac care"], "cardiac perfusion": ["cardiac perfusion","perfusion technology"], "cardio pulmonary": ["cardio pulmonary","cardiopulmonary"], "emergency trauma care": ["emergency","trauma care"], "critical care": ["critical care"], "respiratory care": ["respiratory care","respiratory therapy","respiratory theraphy"], "neuro electrophysiology": ["neuro electro","neuroelectro"], "optometry": ["optometry","b.optom","b. optom"], "physician assistant": ["physician assistant"], "blood bank technology": ["blood bank"], "clinical embryology": ["clinical embryology"], "health inspector": ["health inspector"], "neuroscience technology": ["neuroscience technology"], "cath lab technology": ["cath lab"], "dermato cosmetology": ["dermato"], "diabetes science": ["diabetes"], "mbbs": ["mbbs"], "bds": ["bds"], "mds": ["mds"], "bhms homeopathy": ["bhms","homeopat","homoeopat"], "bsms siddha": ["bsms","siddha"], "bnys naturopathy": ["bnys","naturopathy","b.n.y.s"], "mba": ["mba","m.b.a"], "mca": ["mca","m.c.a"], "llb": ["llb - bachelor","llb (hons)","llb / integrated"], "bba llb": ["b.b.a llb","bba llb"], "ba llb": ["b.a llb","ba - llb","ba llb"], "bcom llb": ["b.com llb"], "bsc llb": ["b.sc llb"], "llm": ["llm","ll.m"], "bpharm": ["b.pharm","b.parm"], "dpharm": ["d.pharm","d. pharm"], "pharmd": ["pharm.d"], "pharmaceutical technology": ["pharmaceutical technology"], "pharmaceutical engineering": ["pharmaceutical engineering"], "barch": ["b.arch","barch:","b.arch."], "march": ["m.arch","master of architecture"], "bdes fashion": ["b.des - fashion","b.design - fashion"], "bdes interior": ["b.des - interior","bachelor designing interior"], "diploma cse": ["diploma - computer science engineering","diploma - computer science and engineering"], "diploma ece": ["diploma - electronics and communication engineering"], "diploma eee": ["diploma - electrical and electronics engineering","deee"], "diploma mechanical": ["diploma - mechanical engineering","dme "], "diploma civil": ["diploma - civil engineering"], "diploma automobile": ["diploma - automobile engineering"], "diploma chemical": ["diploma - chemical"], "diploma marine": ["diploma - marine engineering"], "diploma agricultural": ["diploma - agricultural engineering"], "diploma computer technology": ["diploma - computer technology"], "diploma mlt": ["diploma - medical laboratory technology","diploma - medical lab technology","dmlt"], "diploma dialysis": ["diploma - dialysis technology"], "diploma imaging": ["diploma - medical imaging","diploma - x-ray","diploma - ophthalmic"], "diploma ot anaesthesia": ["diploma - anaesthesia","diploma - operation theatre"], "diploma fire safety": ["diploma - fire technology","diploma - fire and safety"], "diploma petrochemical": ["diploma - petrochemical"], "diploma mine": ["diploma - mine engineering"], "dgnm": ["dgnm","diploma in general nursing"], "bed": ["b.ed","b.ed ="], "bped": ["b.p.ed"], "bpes": ["b.p.e.s"], "msc maths": ["m.sc - mathematics"], "msc physics": ["m.sc - physics"], "msc chemistry": ["m.sc - chemistry","m.sc - analytical chemistry"], "msc biotechnology": ["m.sc - bio-technology","m.sc - biotechnology"], "msc computer science": ["m.sc - computer science"], "msc software systems": ["m.sc - software systems"], "mcom": ["m.com"], "ma english pg": ["m.a - english"], "ma tamil pg": ["m.a - tamil"], "msw": ["m.s.w"], "md hom": ["md.(hom)","m.d"], "bfa": ["b.f.a","bfa"], "bpa": ["b.p.a","bpa"], "baslp": ["baslp","audiology and speech"], "bha hospital admin": ["b.h.a","bha - bachelor of hospital"], "bhm hotel mgmt": ["b.h.m","bhm - bachelor of hotel"], "bot occupational therapy": ["b.o.t","bot - bachelor of occupational","occupational therapy"], "blis library science": ["b.l.i.s","library and information","library & information"], "bsw social work": ["b.s.w","bsw - bachelor"], "bph public health": ["b.p.h","bph -"], "blit tamil": ["b.lit"], "animation vfx": ["animation & visual effects","b.sc - animation","b.sc (hons) - animation","b.sc.- animation"], "catering science": ["catering science","b.sc - catering"], "bsc aviation": ["b.sc - aviation","b.sc - aeronautical science","b.sc aeronautical"], "nautical science": ["nautical science"] };

    function applyFilter() {
      var zones   = getCheckedVals('fZone');
      var cities  = getCheckedVals('fCity');
      var courses = getCheckedVals('fCourse');
      var colleges= getCheckedVals('fCollege');
      var depts   = getCheckedVals('fDept');
      var rawGs = document.getElementById('fGlobalSearch') ? document.getElementById('fGlobalSearch').value.trim() : '';
      var gs = expandSearchQuery(rawGs);
      var clrBtn = document.getElementById('fSearchClear');
      if (clrBtn) clrBtn.style.display = rawGs ? 'flex' : 'none';
      var tot = 0;
      document.querySelectorAll('.zg').forEach(function(zg) {
        var zgZone = (zg.dataset.zone || '').toLowerCase();
        var vis = 0;
        zg.querySelectorAll('.fcc').forEach(function(c) {
          var cZone    = (c.dataset.zone    || zgZone).toLowerCase();
          var cCity    = (c.dataset.city    || '').toLowerCase();
          var cCourses = (c.dataset.courses || '').toLowerCase();
          var cName    = (c.dataset.name    || '').toLowerCase();
          var cDepts   = (c.dataset.depts   || '').toLowerCase();
          var cLoc     = (c.dataset.loc     || '').toLowerCase();
          var zm  = zones.length   === 0 || zones.some(function(z){   return cZone === z; });
          var cm  = cities.length  === 0 || cities.some(function(ct){ return cCity === ct; });
          var com = courses.length === 0 || courses.some(function(co){ return cCourses.split(',').some(function(x){ return x.trim().toLowerCase().includes(co); }); });
          var nm  = colleges.length=== 0 || colleges.some(function(cl){ return cName.includes(cl.toLowerCase().trim()); });
          var dpm = depts.length   === 0 || depts.some(function(dp) {
            var terms = DEPT_MAP[dp];
            if (!terms) return false;
            return terms.some(function(term){ return cDepts.indexOf(term) !== -1; });
          });
          var gm  = !gs || cName.includes(gs) || cCity.includes(gs) || cLoc.includes(gs) || cCourses.includes(gs) || cDepts.includes(gs) || cZone.includes(gs);
          var show = zm && cm && com && nm && dpm && gm;
          c.style.display = show ? '' : 'none';
          if (show) vis++;
        });
        zg.style.display = vis > 0 ? '' : 'none'; tot += vis;
      });
      if (typeof updateSelectedTags === 'function') updateSelectedTags();
      var nr = document.getElementById('noResults'); if (nr) nr.style.display = tot === 0 ? 'block' : 'none';
      var fc = document.getElementById('filterCount'); if (fc) {
        fc.textContent = tot + ' college' + (tot !== 1 ? 's' : '') + ' found';
        var hasFilter = zones.length||cities.length||courses.length||colleges.length||depts.length||rawGs;
        fc.style.display = (tot > 0 || hasFilter) ? 'block' : 'none';
      }
    }

    function resetFilter() {
      document.querySelectorAll('input[name="fZone"],input[name="fCity"],input[name="fCourse"],input[name="fCollege"],input[name="fDept"]').forEach(function(cb){ cb.checked = false; });
      var gs = document.getElementById('fGlobalSearch'); if (gs) gs.value = '';
      var clr = document.getElementById('fSearchClear'); if (clr) clr.style.display = 'none';
      document.querySelectorAll('.fp-cat-search').forEach(function(i){ i.value=''; filterFpList(i); });
      document.querySelectorAll('.fcc').forEach(function(c){ c.style.display=''; });
      document.querySelectorAll('.zg').forEach(function(zg){ zg.style.display=''; });
      var nr = document.getElementById('noResults'); if (nr) nr.style.display = 'none';
      var fc = document.getElementById('filterCount'); if (fc) fc.style.display = 'none';
      if (typeof updateSelectedTags === 'function') updateSelectedTags();
    }

    function clearGlobalSearch() { var gs = document.getElementById('fGlobalSearch'); if (gs){ gs.value=''; gs.focus(); } applyFilter(); }

    /* ── Update selected-tag badges (multi-select version) ── */
    function updateSelectedTags() {
      var NAMES = ['fZone','fCity','fCourse','fCollege','fDept'];
      NAMES.forEach(function(name) {
        var tag = document.querySelector('.fp-selected-tag[data-radio="' + name + '"]');
        if (!tag) return;
        var checked = [];
        document.querySelectorAll('input[name="' + name + '"]:checked').forEach(function(cb) {
          if (cb.value !== '') {
            var lbl = cb.parentElement.querySelector('span');
            if (lbl) checked.push(lbl.textContent.trim());
          }
        });
        if (checked.length === 0) {
          tag.textContent = '';
          tag.style.display = 'none';
        } else if (checked.length === 1) {
          var t = checked[0];
          tag.textContent = t.length > 16 ? t.substring(0,14) + '…' : t;
          tag.style.display = 'inline-flex';
        } else {
          var first = checked[0];
          var short = first.length > 10 ? first.substring(0,8) + '…' : first;
          tag.textContent = short + ' +' + (checked.length - 1);
          tag.style.display = 'inline-flex';
        }
      });
    }

    /* ── Accordion toggle ── */
    function toggleFpGroup(head) {
      var body = head.nextElementSibling;
      var ch = head.querySelector('.fp-chevron');
      var isCollapsed = body.classList.contains('collapsed');
      document.querySelectorAll('.fp-group-body').forEach(function(b) {
        b.classList.add('collapsed');
        var c = b.previousElementSibling && b.previousElementSibling.querySelector('.fp-chevron');
        if (c) c.classList.remove('rotated');
      });
      if (isCollapsed) {
        body.classList.remove('collapsed');
        ch.classList.add('rotated');
      }
    }

    /* ── Close on mouseleave + init ── */
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.fp-group').forEach(function(group) {
        group.addEventListener('mouseleave', function() {
          var body = group.querySelector('.fp-group-body');
          var ch   = group.querySelector('.fp-chevron');
          if (body && !body.classList.contains('collapsed')) {
            body.classList.add('collapsed');
            if (ch) ch.classList.remove('rotated');
          }
        });
      });
      /* Hook option checkboxes to uncheck "All" when a specific is picked */
      document.querySelectorAll('.fp-check-item input[type="checkbox"]:not(.fp-all-check)').forEach(function(cb) {
        cb.addEventListener('change', function() {
          if (cb.checked) {
            var allCb = document.querySelector('input[name="' + cb.name + '"].fp-all-check');
            if (allCb) allCb.checked = false;
          }
          applyFilter();
        });
      });
      updateSelectedTags();
    });

    document.addEventListener('change', function(e) {
      if (e.target && e.target.type === 'checkbox') updateSelectedTags();
    });
    function filterFpList(input) {
      var q = input.value.toLowerCase();
      var list = input.nextElementSibling;
      if (!list) return;
      list.querySelectorAll('.fp-check-item').forEach(function(item) {
        var txt = item.querySelector('span') ? item.querySelector('span').textContent.toLowerCase() : '';
        var isAll = item.querySelector('input') && item.querySelector('input').value === '';
        item.style.display = (isAll || !q || txt.includes(q)) ? '' : 'none';
      });
      /* Show/hide group labels: hide if all following items are hidden */
      list.querySelectorAll('.fp-group-label').forEach(function(lbl) {
        if (!q) { lbl.style.display = ''; return; }
        var sib = lbl.nextElementSibling, anyVisible = false;
        while (sib && !sib.classList.contains('fp-group-label')) {
          if (sib.style.display !== 'none') { anyVisible = true; break; }
          sib = sib.nextElementSibling;
        }
        lbl.style.display = anyVisible ? '' : 'none';
      });
    }


    /* MODAL */
    var facIcons = { 'Library': 'fas fa-book', 'Labs': 'fas fa-flask', 'Hostel': 'fas fa-bed', 'Hostels': 'fas fa-bed', 'Hospital': 'fas fa-hospital', 'Sports': 'fas fa-running', 'WiFi': 'fas fa-wifi', 'Canteen': 'fas fa-utensils', 'Research Labs': 'fas fa-microscope', 'Olympic Pool': 'fas fa-swimming-pool', 'Design Center': 'fas fa-pencil-ruler', 'Fab Lab': 'fas fa-cogs', 'Bank': 'fas fa-university', 'Cafeteria': 'fas fa-coffee', 'Research Center': 'fas fa-microscope', 'Research Park': 'fas fa-leaf' };
    function openModal(el) { var ls = el.querySelector('.fcc-logo'); showModal(el.dataset.name || '', el.dataset.loc || '', el.dataset.overview || '', (el.dataset.depts || '').split(','), (el.dataset.facilities || '').split(','), (el.dataset.gallery || '').split(',').filter(Boolean), ls ? ls.src : ''); }
    function openPartnerModal(n, l, ov, cs, dp, fa) { showModal(n, l, ov, dp.split(','), fa ? fa.split(',') : [], []); }
    function openModalByName(name) { var el = document.querySelector('.fcc[data-name="' + name + '"]'); if(el) openModal(el); }
    function showModal(n, l, ov, depts, facs, gal, logo) {
      document.getElementById('modalTitle').textContent = n; document.getElementById('modalLoc').textContent = l; document.getElementById('modalOverview').textContent = ov || 'Details coming soon.';
      var ml = document.getElementById('modalLogo'); if (logo) { ml.src = logo; ml.style.display = ''; } else ml.style.display = 'none';
      document.getElementById('modalDepts').innerHTML = depts.filter(function (d) { return d.trim(); }).map(function (d) { return '<div class="di"><i class="fas fa-graduation-cap"></i><span>' + d.trim() + '</span></div>'; }).join('') || '<p style="color:#64748b;font-size:.9rem">Details coming soon.</p>';
      document.getElementById('modalFacilities').innerHTML = facs.filter(function (f) { return f.trim(); }).map(function (f) { return '<div class="fi"><i class="' + (facIcons[f.trim()] || 'fas fa-check-circle') + '"></i>' + f.trim() + '</div>'; }).join('') || '<p style="color:#64748b;font-size:.9rem">Details coming soon.</p>';
      var gs = document.getElementById('gallerySection'), mg = document.getElementById('modalGallery');
      if (gal && gal.length) { gs.style.display = ''; mg.innerHTML = gal.map(function (s) { return '<div class="mgi"><img src="' + s + '" alt="Campus" loading="lazy" onerror="this.parentNode.style.background=\'linear-gradient(135deg,#dbeafe,#2563eb)\';this.style.display=\'none\'"/></div>'; }).join(''); } else gs.style.display = 'none';
      document.getElementById('modalApplyBtn').onclick = function () { closeModal(); applyTo(n); };
      document.getElementById('collegeModal').classList.add('open'); document.body.classList.add('no-scroll');
    }
    function closeModal() { document.getElementById('collegeModal').classList.remove('open'); document.body.classList.remove('no-scroll'); }

    /* APPLY TO */
    function applyTo(name) { document.getElementById('fcollegePreFill').value = name; var n = document.getElementById('collegePreFillNotice'); n.innerHTML = '<i class="fas fa-university"></i> Applying to: <strong>' + name + '</strong>'; n.style.display = 'flex'; document.getElementById('register').scrollIntoView({ behavior: 'smooth' }); }

    /* GALLERY LIGHTBOX */
    document.querySelectorAll('.gi').forEach(function (item) { item.addEventListener('click', function () { var img = item.querySelector('img'); if (!img || !img.src) return; document.getElementById('lbImg').src = img.src; document.getElementById('lightbox').classList.add('open'); document.body.classList.add('no-scroll'); }); });
    function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); document.body.classList.remove('no-scroll'); }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeLightbox(); closeModal(); } });

    /* FORM */
    var lastData = null;
   
document.getElementById('registerForm').addEventListener('submit', function (e) {
      e.preventDefault(); var ok = true;
      function req(id, eid, fn) { var el = document.getElementById(id); if(!el) return; var er = document.getElementById(eid); el.classList.remove('error'); er && er.classList.remove('show'); if (!fn(el.value)) { el.classList.add('error'); er && er.classList.add('show'); ok = false; } }
      req('fname',     'fnameError',     function(v){ return v.trim().length > 1; });
      req('ffname',    'ffnameError',    function(v){ return v.trim().length > 1; });
      req('fmobile',   'fmobileError',   function(v){ return /^[0-9]{10}$/.test(v.replace(/[\s+\-]/g,'').replace(/^91/,'')); });
      req('femail',    'femailError',    function(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); });
      req('fcommunity','fcommunityError',function(v){ return v.length > 0; });
      req('fschool',   'fschoolError',   function(v){ return v.trim().length > 2; });
      req('f10mark',   'f10markError',   function(v){ return v.trim().length > 0; });
      req('f12group',  'f12groupError',  function(v){ return v.length > 0; });
      // Stream and course are optional - no validation required
      if (!ok) { var fe = document.querySelector('.error'); if (fe) fe.scrollIntoView({ behavior:'smooth', block:'center' }); return; }

      function gv(id){ var el=document.getElementById(id); return el ? el.value.trim() : ''; }

      lastData = {
        name:         gv('fname'),
        fatherName:   gv('ffname'),
        mobile:       gv('fmobile'),
        whatsapp:     gv('fwhatsapp') || gv('fmobile'),
        email:        gv('femail'),
        aadhar:       gv('faadhar'),
        community:    gv('fcommunity'),
        caste:        gv('fcaste') || 'Not specified',
        school:       gv('fschool'),
        board:        gv('fboard'),
        mark10:       gv('f10mark'),
        mark12:       gv('f12mark'),
        cutoff:       gv('fcutoff'),
        group12:      gv('f12group'),
        regNo:        gv('fregno'),
        stream:       gv('fstream'),
        course:       gv('fcourse'),
        collegePref:  gv('fcollegepref') || gv('fcollegePreFill') || 'Open to Suggestions',
        firstGrad:    gv('ffirstgrad'),
        location:     gv('flocation') || 'Any',
        address:      gv('faddress'),
        date:         new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'long',year:'numeric'})
      };

      /* ── SAVE TO GOOGLE SHEETS (async, non-blocking) ── */
      var SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxbo8lE9QdmoJOP7xE3vgjgsOTVNkulngJ5vgrspsaKHV3GUFymC2KZXFuw6dAsjsf8/exec';
      if (SHEETS_URL) {
        fetch(SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lastData)
        }).catch(function(){});  /* silent fail — never blocks the user */
      }

      var btn = document.getElementById('formSubmitBtn');
      btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';

      setTimeout(function(){
        btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Application & Download PDF';
        generatePDF(lastData);

        /* PDF downloaded — no WhatsApp redirect */

        document.getElementById('registerForm').reset();
        document.getElementById('fcollegePreFill').value = '';
        var notice = document.getElementById('collegePreFillNotice');
        if(notice) notice.style.display = 'none';

        document.getElementById('popupText').innerHTML = 'Thank you, <strong>' + lastData.name + '</strong>! Your application PDF has been downloaded. Please send it to our WhatsApp: <strong>+91 70947 50802</strong>';
        var pt = document.getElementById('popupTitle');
        if(pt) pt.textContent = 'Application Submitted! 🎉';
        var rdl = document.getElementById('redownloadPdf');
        if(rdl) rdl.style.display = 'flex';
        document.getElementById('successPopup').classList.add('show');
      }, 1600);
    });

    /* PDF GENERATOR — matches original application form layout */
    function generatePDF(d) {
      try {
        var jsPDF = window.jspdf ? window.jspdf.jsPDF : null;
        if (!jsPDF) { setTimeout(function(){ generatePDF(d); }, 800); return; }
        var doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
        var W=210, pL=18, pR=18, usW=W-pL-pR;

         /* ── HEADER (compact) ── */
        var hH = 22; /* minimized header height */
        doc.setFillColor(10,31,92); doc.rect(0,0,210,hH,'F');
        doc.setFillColor(245,197,24); doc.rect(0,hH,210,1.2,'F');

        /* Logo */
        var logoSize=14, logoX=8, logoY=(hH-logoSize)/2;
        try { doc.addImage('./images/logo.webp','WEBP',logoX,logoY,logoSize,logoSize); } catch(x){ try { doc.addImage('./images/logo.webp','WEBP',logoX,logoY,logoSize,logoSize); } catch(e){} }

        /* Title text centred */
        var midH = hH/2;
        doc.setTextColor(245,197,24); doc.setFontSize(14); doc.setFont('helvetica','bold');
        doc.text('D.V.R EDUCATION', W/2, midH-2, {align:'center'});
        doc.setTextColor(255,255,255); doc.setFontSize(7.5); doc.setFont('helvetica','normal');
        doc.text('Higher Educational Solutions  |  Kuthalam & Mayiladuthurai  |  +91 70947 50802', W/2, midH+5, {align:'center'});

        /* ── TITLE ── */
        doc.setTextColor(10,31,92); doc.setFontSize(15); doc.setFont('helvetica','bold');
        doc.text('APPLICATION FORM', W/2, 34, {align:'center'});
        doc.setDrawColor(10,31,92); doc.setLineWidth(0.6);
        doc.line(pL+10, 37, W-pR-10, 37);
        doc.setFontSize(9); doc.setFont('helvetica','normal'); doc.setTextColor(100,116,139);
        doc.text('Date: '+d.date, W-pR, 34, {align:'right'});
        doc.text('Ref: DVR-'+Date.now().toString().slice(-7), pL, 34);

        /* ── FIELD HELPER ── */
        var y=44;
        function row(label, val, fullW){
          var lw=60, lineX=pL+lw+4, lineW = fullW ? usW-lw-4 : usW-lw-32;
          doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(15,23,42);
          doc.text(label, pL, y);
          doc.setFont('helvetica','normal'); doc.setTextColor(50,50,50); doc.setFontSize(12);
          doc.text(':', pL+lw, y);
          if(val && val.trim() && val !== '-'){
            doc.text(String(val), lineX, y);
          }
          doc.setDrawColor(0,0,0); doc.setLineWidth(0.3);
          doc.setLineDash([0.8,1.2]);
          doc.line(lineX, y+1, lineX+lineW, y+1);
          doc.setLineDash([]);
          y += 12;
        }
        function dualRow(l1,v1,l2,v2){
          var half=usW/2-2;
          doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(15,23,42);
          doc.text(l1, pL, y); doc.text(':', pL+42, y);
          if(v1) { doc.setFont('helvetica','normal'); doc.setFontSize(12); doc.text(String(v1), pL+45, y); }
          doc.setDrawColor(0,0,0); doc.setLineWidth(0.3); doc.setLineDash([0.8,1.2]);
          doc.line(pL+45, y+1, pL+half, y+1);
          doc.setFont('helvetica','bold'); doc.setFontSize(12); doc.setTextColor(15,23,42);
          doc.text(l2, pL+half+4, y); doc.text(':', pL+half+4+38, y);
          if(v2) { doc.setFont('helvetica','normal'); doc.setFontSize(12); doc.text(String(v2), pL+half+4+41, y); }
          doc.setLineDash([0.8,1.2]);
          doc.line(pL+half+4+41, y+1, W-pR, y+1);
          doc.setLineDash([]);
          y += 12;
        }
        function fixedText(label, val){
          doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(15,23,42);
          doc.text(label, pL, y); doc.text(':', pL+60, y);
          doc.setFont('helvetica','normal'); doc.setFontSize(12); doc.setTextColor(50,50,50);
          doc.text(String(val), pL+64, y);
          y += 12;
        }

        /* ── FIELDS ── */
        row('Student Name',    d.name,       true);
        row('Father Name',     d.fatherName, true);
        row('Mother Name',     d.motherName, true);
        dualRow('Mobile No (Student)', d.mobile, 'Mobile No (Parent)', d.mobileParent);
        dualRow('WhatsApp (Student)',  d.whatsapp,'WhatsApp (Parent)',  d.whatsappParent);
        row('Mail ID',         d.email,      true);
        row('Aadhar No',       d.aadhar,     true);
        dualRow('Community',   d.community,  'Caste',   d.caste);
        row('School Name & Place', d.school, true);
        fixedText('Board',  (d.board  || 'State Board / CBSE'));
        y += 2;

        /* Marks row */
        doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(15,23,42);
        doc.text('10',  pL, y); doc.setFontSize(8); doc.text('th', pL+10, y-2);
        doc.setFontSize(12); doc.text(' Mark', pL+14, y); doc.text(':', pL+34, y);
        doc.setLineDash([0.8,1.2]); doc.setLineWidth(0.3);
        doc.line(pL+36, y+1, pL+63, y+1);
        if(d.mark10){ doc.setFont('helvetica','normal'); doc.setFontSize(12); doc.text(d.mark10, pL+37, y); }

        doc.setFont('helvetica','bold'); doc.setFontSize(12);
        doc.text('11', pL+69, y); doc.setFontSize(8); doc.text('th', pL+79, y-2);
        doc.setFontSize(12); doc.text(' Mark :', pL+83, y);
        doc.line(pL+103, y+1, pL+129, y+1);
        if(d.mark11){ doc.setFont('helvetica','normal'); doc.setFontSize(12); doc.text(d.mark11, pL+104, y); }

        doc.setFont('helvetica','bold'); doc.setFontSize(12);
        doc.text('12', pL+135, y); doc.setFontSize(8); doc.text('th', pL+145, y-2);
        doc.setFontSize(12); doc.text(' Mark :', pL+149, y);
        doc.line(pL+169, y+1, usW+pL, y+1);
        if(d.mark12){ doc.setFont('helvetica','normal'); doc.setFontSize(12); doc.text(d.mark12, pL+170, y); }
        doc.setLineDash([]);
        y += 12;

        dualRow('12th Group', d.group12, 'Cut Off', d.cutoff);
        row('12th Exam Reg No', d.regNo, true);
        dualRow('Stream', d.stream, 'Course Preference', d.course);
        row('College Name & Place', d.collegePref, true);
        y += 2;
        doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(15,23,42);
        doc.text('First Graduate (Yes/No) : ' + (d.firstGrad||''), pL, y); y+=12;

        /* ── ADDRESS BOX ── */
        doc.setDrawColor(0,0,0); doc.setLineWidth(0.5);
        doc.setLineDash([3,2]); doc.rect(pL, y, usW, 24); doc.setLineDash([]);
        doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.text('Address for Communication :', pL+3, y+8);
        doc.setFont('helvetica','normal');
        var addrLines = doc.splitTextToSize(d.address||'', usW-6);
        doc.text(addrLines[0]||'', pL+3, y+16);
        if(addrLines[1]) doc.text(addrLines[1], pL+3, y+22);
        y += 32;

        

        /* ── FOOTER ── */
        doc.setFillColor(10,31,92); doc.rect(0,268,210,18,'F');
        doc.setFillColor(245,197,24); doc.rect(0,286,210,1.5,'F');
        doc.setFillColor(245,197,24); doc.rect(0,287.5,210,9.5,'F');
 
        /* Contact message line — white on navy */
        doc.setFontSize(8.5); doc.setFont('helvetica','bold'); doc.setTextColor(255,255,255);
        doc.text('We will contact you as soon as possible. Feel free to reach us anytime!', W/2, 275, {align:'center'});
        doc.setFontSize(7.5); doc.setFont('helvetica','normal'); doc.setTextColor(190,205,235);
        doc.text('DVR Education | +91 70947 50802 | Kuthalam & Mayiladuthurai, Tamil Nadu', W/2, 282, {align:'center'});
 
        /* Gold bar text — dark blue */
        doc.setTextColor(10,31,92); doc.setFont('helvetica','bold'); doc.setFontSize(8);
        doc.text('Send this PDF to our WhatsApp: +91 70947 50802', W/2, 293, {align:'center'});

        doc.save('DVR_Application_' + d.name.replace(/\s+/g,'_') + '.pdf');
      } catch(err){ console.error(err); alert('PDF failed. Please contact +91 70947 50802.\n\nError: '+err.message); }
    }
    function reDownloadPDF(){ if(lastData) generatePDF(lastData); }
    
    /* CONTACT FORM — auto email via Web3Forms */
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var n   = document.getElementById('cname').value.trim();
      var em  = document.getElementById('cemail').value.trim();
      var ph  = document.getElementById('cphone').value.trim();
      var msg = document.getElementById('cmessage').value.trim();
      if (!n || !em || !msg) { alert('Please fill all required fields.'); return; }
      var btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '1fe3db9e-9184-4e9e-898a-d6e4803ec7ce',
          subject: '📨 New Enquiry from ' + n + ' – DVR Education Website',
          from_name: 'DVR Education Website',
          name: n,
          email: em,
          phone: ph,
          message: msg
        })
      })
      .then(function(res){ return res.json(); })
      .then(function(data){
        btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        document.getElementById('contactForm').reset();
        var pt = document.getElementById('popupTitle');
        if(pt) pt.textContent = 'Message Sent! 📨';
        document.getElementById('popupText').innerHTML = '✅ Thank you, <strong>' + n + '</strong>! Your message has been sent successfully. We will get back to you shortly.';
        document.getElementById('redownloadPdf').style.display = 'none';
        document.getElementById('successPopup').classList.add('show');
      })
      .catch(function(){
        btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        alert('Message could not be sent. Please WhatsApp us directly at +91 70947 50802.');
      });
    });
    (function () {
      var slider = document.getElementById('whySlider');
      if (!slider) return;
      var cards = slider.querySelectorAll('.wcard');
      var total = cards.length;
      var perView = 4;
      var current = 0;
      var autoTimer;
      var bar = document.getElementById('whyBar');
      var cur = document.getElementById('whyCur');
      var tot = document.getElementById('whyTotal');
      if (tot) tot.textContent = String(total).padStart(2, '0');

      function getPerView() {
        return window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : window.innerWidth < 1100 ? 3 : 4;
      }

      function go(idx) {
        perView = getPerView();
        var max = total - perView;
        current = Math.max(0, Math.min(idx, max));
        var cardW = cards[0].offsetWidth + 20;
        slider.style.transform = 'translateX(-' + (current * cardW) + 'px)';
        if (cur) cur.textContent = String(current + 1).padStart(2, '0');
        if (bar) bar.style.width = ((current / max) * 100) + '%';
      }

      document.getElementById('whyNext').addEventListener('click', function () {
        perView = getPerView();
        go(current + 1 >= total - perView + 1 ? 0 : current + 1);
        resetAuto();
      });
      document.getElementById('whyPrev').addEventListener('click', function () {
        perView = getPerView();
        go(current - 1 < 0 ? total - perView : current - 1);
        resetAuto();
      });

      function autoPlay() {
        autoTimer = setInterval(function () {
          perView = getPerView();
          go(current + 1 >= total - perView + 1 ? 0 : current + 1);
        }, 3500);
      }

      function resetAuto() { clearInterval(autoTimer); autoPlay(); }
      window.addEventListener('resize', function () { go(current); });
      go(0);
      autoPlay();
    })();


(function(){
  var slider = document.getElementById('gSlider');
  var dotsWrap = document.getElementById('gsDots');
  if(!slider) return;
  var cards = Array.from(slider.querySelectorAll('.gs-card'));
  var total = cards.length;
  var current = 0;
  var autoTimer;

  // Build dots
  cards.forEach(function(_,i){
    var d = document.createElement('button');
    d.className = 'gs-dot' + (i===0?' active':'');
    d.setAttribute('aria-label','Go to slide '+(i+1));
    d.addEventListener('click', function(){ go(i); resetAuto(); });
    dotsWrap.appendChild(d);
  });

  function go(idx){
    current = ((idx % total) + total) % total;
    cards.forEach(function(card, i){
      var diff = i - current;
      // Wrap around
      if(diff > total/2) diff -= total;
      if(diff < -total/2) diff += total;
      var pos = diff;
      if(pos > 2) pos = 'hide';
      else if(pos < -2) pos = 'hide';
      card.setAttribute('data-pos', String(pos));
    });
    // Update dots
    var dots = dotsWrap.querySelectorAll('.gs-dot');
    dots.forEach(function(d,i){ d.classList.toggle('active', i===current); });
  }

  // Click side cards to navigate
  slider.addEventListener('click', function(e){
    var card = e.target.closest('.gs-card');
    if(!card) return;
    var pos = card.getAttribute('data-pos');
    if(pos === '1' || pos === '2'){ go(current+1); resetAuto(); }
    else if(pos === '-1' || pos === '-2'){ go(current-1); resetAuto(); }
  });

  // Touch/swipe
  var startX = 0;
  slider.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, {passive:true});
  slider.addEventListener('touchend', function(e){
    var diff = startX - e.changedTouches[0].clientX;
    if(Math.abs(diff) > 40){ go(diff > 0 ? current+1 : current-1); resetAuto(); }
  });

  function autoPlay(){
    autoTimer = setInterval(function(){ go(current+1); }, 3500);
  }
  function resetAuto(){ clearInterval(autoTimer); autoPlay(); }

  go(0);
  autoPlay();
  
})();

