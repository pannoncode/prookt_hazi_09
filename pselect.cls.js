console.log("OK");

class PSelect {

    constructor(o) {

        Object.assign(this, {
            multiselect: true,
            selector: "",
        }, o);

        this.init();
    };

    init() {
        this.ct = document.querySelector(this.selector);

        var selectType = this.multiselect ? "multi" : "single";

        var _this = this;

        this.ct.querySelectorAll("p").forEach(p => {

            p.onclick = function() {
                _this[selectType](p);
            }

        });
    }

    multi(p) {
        p.classList.toggle("highlight");
    }

    single(p) {
        var selected = this.ct.querySelector("p.highlight");

        if (selected && p != selected)
            selected.classList.remove("highlight");

        p.classList.toggle("highlight");
    }


    get value() {
        var values = [];
        var _this = this;

        this.ct.querySelectorAll("p.highlight").forEach(p => {

            if (_this.valAttr)
                values.push(p.getAttribute(_this.valAttr) || p.innerText);
            else
                values.push(p.innerText);
        });


        return this.multiselect ? values : values[0] || "";
    }

    set value(plist) {
        /*
            plistarray = ["egres", {name: "dió", value: "dio", selected: true}];
            Létrehoz annyi p taget, amennyi eleme van a plistarray,
            -   statikus objekt elem esetén a p tag innerText-je legyen a "name", value attributum
            pedig a value értéke
            és legyen highlight css class attributum, amennyiben be van állítva true értékkel a selected kulcs
            -   sima string elem esetén egy sima p tag, aminek innerTextje maga a string
            -   ezek a p elemek legyenek a multiselect értékei
            
         */

        for (let i = 0; i < plist.length; i++) {

            var pct = document.querySelector("#ms2");
            var pTag = document.createElement("p");

            var content = document.createTextNode(plist[i]);

            pTag.innerText = content.data;
            pct.appendChild(pTag);



            if (plist[i].name !== undefined) {
                console.log(plist[i].name);
                content = document.createTextNode(plist[i].name);
                pTag.innerText = content.data;
                pTag.setAttribute("value", plist[i].value);
                pct.appendChild(pTag);
            }

            if (plist[i].selected === true)
                pTag.setAttribute("class", "highlight");

        } //end for

        //ezek a p elemek legyenek a multiselect értékei => így működik de nem tudom, hogy ez így "szabályos vagy élhető" 
        var sel = new PSelect({
            multiselect: true,
            selector: "#ms2"
        });


    }

}

// amivel teszteltem
var plistarray = ["egres", "mogyoró", "alma", "körte", { name: "dió", value: "dio", selected: true }, "barack", { name: "meggy", value: "meggy", selected: true }];