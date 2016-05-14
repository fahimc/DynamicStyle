var DynamicStyle = {
    styleElement: null,
    styleString: '',
    headElement: null,
    elementIndex: 0,
    init: function() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad: function() {
        this.headElement = document.getElementsByTagName('head')[0];
        this.createStyleTag();
    },
    getElementIndex: function() {
        this.elementIndex += 1;
        return this.elementIndex;
    },
    createStyleTag: function() {
        if (this.styleElement) return;
        this.styleElement = document.createElement('style');
        this.styleElement.setAttribute("type", "text/css");
        this.styleElement.id = "dynamic-style";
        this.headElement.appendChild(this.styleElement);
    },
    addMediaQuery: function(media, content) {
        var style = '@media ' + media + '{' + content + '}';
        this.addStyle(style);
    },
    removeStyleProperty: function(element, property) {
        if (element.style.removeProperty) {
            element.style.removeProperty(property);
        } else {
            element.style.removeAttribute(property);
        }
    },
    addStyle: function(_css) {
        this.styleString += _css;
        if (this.styleElement.styleSheet) {
            this.styleElement.styleSheet.cssText = this.styleString;
        } else {
            var node = document.createTextNode(_css);
            this.styleElement.appendChild(node);
        }
    }
}
DynamicStyle.init();
