/**
 * Text Building Effect (v1.0.1.20170117), http://tpkn.me/
 */

function TextBuildingEffect(config){
   var aid;
   var root = this;

   /**
    * Container with text
    * @type {Object}
    */
   if(typeof config === null){
      throw new Error('Container div is not set!');
   }

   /**
    * Container with text
    * @type {Object}
    */
   root.div = config.div || null;
   if(root.div === null){
      throw new Error('Container div is not set!');
   }

   /**
    * Collapse / expand speed
    * @type {Number}
    */
   root.build_speed = config.build_speed || 65;
   root.remove_speed = config.remove_speed || 35;

   /**
    * ' ' or not set    = no cursor in front, old text collapses with customizable speed
    * ''  or any symbol = caret in front, old text collapses immediately
    */
   root.caret = config.caret || false;

   /**
    * Robert Penner's easing function (http://robertpenner.com/easing/)
    * 
    * @param  {Number} t Time
    * @param  {Number} b Start from this value
    * @param  {Number} c Change in value
    * @param  {Number} d Duration
    */
   function easeInOutCubic(t, b, c, d){
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(t, 3) + b;
      return Math.round(c / 2 * ((t -= 2) * t * t  + 2) + b);
   }

   /**
    * Build new text
    * @param  {String} str
    */
   root.build = function(str){
      clearInterval(aid);
   
      var c = 0;
      var collapse_cut;
      var collapse_source = root.div.innerHTML;
      var collapse_easing = 0;

      var e = 0;
      var expand_cut;
      var expand_source = typeof str !== 'undefined' ? str : ' ';
      var expand_easing = 0;

      aid = setInterval(function(){

         expand_easing = easeInOutCubic(e++, 0, expand_source.length, root.build_speed);
         expand_cut = expand_source.substr(0, expand_easing);

         if(root.caret){
            collapse_cut = root.caret;

            if (Math.round(expand_easing) >= expand_source.length){
               root.div.innerHTML = expand_cut;
               collapse_cut = '';
               clearInterval(aid);
            }
         }else{
            collapse_easing = easeInOutCubic(c++, 0, collapse_source.length, root.remove_speed);
            collapse_cut = collapse_source.substr(collapse_easing, collapse_source.length);

            if (Math.round(expand_easing) >= expand_source.length && Math.round(collapse_easing) >= collapse_source.length){
               clearInterval(aid);
            }
         }

         root.div.innerHTML = expand_cut + '' + collapse_cut;
      }, 10);

      return root;
   }

   root.stop = function(){
      clearInterval(aid);
      return root;
   }
};