$(document).ready(function () {

    var $choosePromo = $(".choose__promo-item");

    $choosePromo.click(function () {
        $this = $(this);
        $choosePromo.removeClass("choose__promo-item--accent");
        $this.addClass("choose__promo-item--accent");
    });

    var $menuBtn = $(".header__menu-item");

    $menuBtn.click(function (e) {
        e.preventDefault();
        var scroll = $(this).attr("data-scroll");
        console.log(scroll);
        var $target = $("." + scroll);
        $.scrollTo($target, 500);
    });

    var options = [
        {
            value: "120g Turmeric Latte",
            prices: ["$19.95ea", "$18.95ea", "$17.95ea"],
            ingredients: "Cold Dried Turmeric (8% Curcumin), Coconut Milk Powder, Ceylon Cinnamon, Ginger, Black Pepper, Monk Fruit"
        },
        {
            value: "100g Turmeric Powder",
            prices: ["$19.95ea", "$18.95ea", "$17.95ea"],
            ingredients: "100% Cold Dried Turmeric (8% Curcumin)"
        },
        {
            value: "120 Turmeric Capsules",
            prices: ["$26.95ea", "$25.60ea", "$24.25ea"],
            ingredients: "Cold Dried Turmeric (8% Curcumin), Black Pepper, Vegetable Capsule"
        }
    ];

    var $dropdown = $(".choose__dropdown");
    var $ingredients = $(".choose__ingredients-content");
    var $price1 = $("#price1");
    var $price2 = $("#price2");
    var $price3 = $("#price3");
    var val = "100g Turmeric Powder";

    $dropdown.change(function () {
        $(".choose__promo-item").removeClass("choose__promo-item--accent");
        val = $(this).val();
        switch (val) {
            case "120g Turmeric Latte":
                renderValues(options[0]);
                break;
            case "100g Turmeric Powder":
                renderValues(options[1]);
                break;
            case "120 Turmeric Capsules":
                renderValues(options[2]);
                break;
        }
    });

    function renderValues(values) {
        $price1.text(values.prices[0]);
        $price2.text(values.prices[1]);
        $price3.text(values.prices[2]);
        $ingredients.text(values.ingredients);
    }
    
    var $scriptBtn = $(".script-btn");
    $scriptBtn.hide();
    $(".script-btn[data-btn='script2']").show();
    var $promoItem = $(".choose__promo-item");
    
    $promoItem.click(function () {
        var dropdownVal = $dropdown.val();
        var $this = $(this);
        switch (dropdownVal) {
            case "120g Turmeric Latte":
                $scriptBtn.hide();
                switch ($this.attr("id")) {
                    case "btn1":
                        $(".script-btn[data-btn='script1']").show();
                        break;
                    case "btn2":
                        $(".script-btn[data-btn='script2']").show();
                        break;
                    case "btn3":
                        $(".script-btn[data-btn='script3']").show();
                        break;
                }
                break;
            case "100g Turmeric Powder":
                $scriptBtn.hide();
                switch ($this.attr("id")) {
                    case "btn1":
                        $(".script-btn[data-btn='script4']").show();
                        break;
                    case "btn2":
                        $(".script-btn[data-btn='script5']").show();
                        break;
                    case "btn3":
                        $(".script-btn[data-btn='script6']").show();
                        break;
                }
                break;
            case "120 Turmeric Capsules":
                $scriptBtn.hide();
                switch ($this.attr("id")) {
                    case "btn1":
                        $(".script-btn[data-btn='script7']").show();
                        break;
                    case "btn2":
                        $(".script-btn[data-btn='script8']").show();
                        break;
                    case "btn3":
                        $(".script-btn[data-btn='script9']").show();
                        break;
                }
                break;
        }
    });

});
