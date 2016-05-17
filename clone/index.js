var manager = {
    oldModel: {},
    model: {
        ID: "",
        Name: "",
        Remark: "",
        Size: ""
    },
    init: function () {
        this.bindEvent();
        this.load();
        this.render();
    },
    bindEvent: function () {
        var _this = this;
        $('#Restore').click(function () {
            _this.restore();
        });
    },
    load: function () {
        //here should be the code to load model from db
        this.model = {
            ID: "10010",
            Name: "Bike",
            Remark: "cheap and pretty suitable for those who like sport.",
            Size: "L"
        };
        //store the origin model here
        this.oldModel = JSON.parse(JSON.stringify(this.model));
    },
    render: function () {
        $('#ID').val(this.model.ID);
        $('#Name').val(this.model.Name);
        $('#Remark').val(this.model.Remark);
        $('#Size').val(this.model.Size);
    },
    save: function () {
        if (this.validate()) {
            alert('now the form is to be submited.')
        }
        else {
            alert('correct the info and try again.')
        }
    },
    validate: function () {
        return true;
    },
    restore: function () {
        this.model = JSON.parse(JSON.stringify(this.oldModel));
        this.render();
    }
};

$(function () {
    manager.init();
});