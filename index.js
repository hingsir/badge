(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Badge = factory();
  }
}(this, function () {

    function Badge(options){
        options = options || {};
        if(!options.container) throw 'container is required. ';
        if(typeof options.container === 'string'){
            this.container = document.querySelector(options.container);
        }else{
            this.container = options.container;
        }
        this.count = options.count = options.count || 0;
        options.overflowCount = options.overflowCount || 99;
        options.dot = options.dot || false;
        options.background = options.background || '#f50';
        options.color = options.color || '#fff';
        init.call(this, options);

    }

    function init(options){
        var self = this;
        var sup = document.createElement('sup');
        sup.style.background = options.background;
        sup.style.color = options.color;
        sup.style.borderRadius = '10px';
        sup.style.fontSize = '12px';
        sup.style.display = 'inline-block';
        sup.style.textAlign = 'center';
        if(options.dot){
            sup.style.height = '8px';
            sup.style.width = '8px';
        }else{
            sup.style.height = '20px';
            sup.style.minWidth = '20px';
            sup.style.lineHeight = '20px';
            sup.style.padding = '0 6px';
            sup.style.boxSizing = 'border-box';
            sup.innerHTML = options.count > options.overflowCount ? (options.overflowCount + '+') : options.count;
        }
        sup.addEventListener('touchmove', badgeDraging);
        sup.addEventListener('touchend', badgeDragEnd);
        self.container.appendChild(sup);
        sup.__defaultRect__ = sup.getBoundingClientRect();
        self.sup = sup;
    }

    function badgeDraging(event){
        var target = event.target;
        target.style.position = 'fixed';
        target.style.left = event.changedTouches[0].pageX + 'px';
        target.style.top = event.changedTouches[0].pageY + 'px';
    }
    function badgeDragEnd(event){
        var target = event.target,
            pageX = event.changedTouches[0].pageX,
            pageY = event.changedTouches[0].pageY,
            defaultLeft = target.__defaultRect__.left,
            defaultTop = target.__defaultRect__.top;
        if(Math.abs(pageX - defaultLeft) < 10 && Math.abs(pageY - defaultTop) < 10){
            target.style.left = defaultLeft + 'px';
            target.style.top = defaultTop + 'px';
            target.style.position = 'static'
        }else{
            target.parentNode.removeChild(target);
        }
    }

    return Badge;
}));
