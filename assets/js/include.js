function loadCSSFiles() {
  files = [
    '../assets/dist/css/super_helper.css',
    '../assets/dist/css/ends.css',
    '../assets/css/custom.css',
  ]

  files.forEach((item,i) => {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    // set the attributes for link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = item;
    head.appendChild(link);
    console.log(link)
  });
}

function loadScript()
{
  let create = (info) => {
      return new Promise(function(resolve, reject) {
          let gfgData = document.createElement('script');
          gfgData.src = info;
          gfgData.async = false;
          gfgData.onload = () => {
              resolve(info);
          };
          gfgData.onerror = () => {
              reject(info);
          };
          document.body.appendChild(gfgData);
          console.log('Loaded Script: '+info)
      });
  };

  const gfgScript = [
    '../assets/dist/js/custom_helper_class.js',
    '../assets/dist/js/custom_helper_class_2.js',
    '../assets/dist/js/custom_helper_class_3.js',
  ]

  let promiseData = [];
  gfgScript.forEach(function(info) {
      promiseData.push(create(info));
  });
  Promise.all(promiseData).then(function() {
      console.log('The required scripts are loaded successfully!');
      a = create('../assets/js/main.js')
  }).catch(function(gfgData) {
      console.log(gfgData + ' failed to load!');
  });
}

loadScript();
loadCSSFiles();
