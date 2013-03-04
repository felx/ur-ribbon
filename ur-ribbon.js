/**
 * Created with IntelliJ IDEA.
 * Date: 01/03/13
 * Time: 19:26
 */

UrRibbon = {

    /**
     * setup onmouseover event to the ribbon wrapper element
     * with the given id
     */
    initAndBind: function (wrapperid) {

        var element = document.getElementById(wrapperid);
        if (element) {
            element.addEventListener("mouseover", function () {
                var right = true;
                var wrapper = element;
                var className = wrapper.getAttribute("class");
                var classes = className.split(" ").filter(function (e) {
                    if (e === "ur-ribbon-right") {
                        right = true;
                        return false;
                    } else if (e === "ur-ribbon-left") {
                        right = false;
                        return false;
                    }
                    return true;
                });
                if (right) {
                    classes.push("ur-ribbon-left")
                } else {
                    classes.push("ur-ribbon-right")
                }
                wrapper.setAttribute("class", classes.join(" "));
            });
        };
    },

    initAndBindForLocation: function(wrapperid, locations){
        if (locations.filter(function (e){  return e === location.hostname}).length > 0 ){
            this.initAndBind(wrapperid);
        } else {
            console.log("jo");
        }
    }


};