window.domHelper = {
    getWidth: function (id) {
        const el = document.getElementById(id);
        return el ? el.offsetWidth : 0;
    }
};

