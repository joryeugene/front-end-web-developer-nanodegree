var model = {
  currentCat : undefined,
  cats : [
    {
      name : 'Golden Cat',
      image : 'images/goldenCat.jpg',
      counter : 0
    },{
      name : 'Grey Cat',
      image : 'images/greyCat.jpg',
      counter : 0
    },{
      name : 'Focused Cat',
      image : 'images/focusedCat.jpg',
      counter : 0
    },{
      name : 'Tiger Cat',
      image : 'images/tigerCat.jpg',
      counter : 0
    },{
      name : 'White Cat',
      image : 'images/whiteCat.jpg',
      counter : 0
    }]
  };

var controller = {
  init : function() {
    view.catSelection.init();
    view.catDetails.clickListener();
  },
  getCats : function() {
    return model.cats;
  },
  getCat : function(index) {
    return model.cats[index];
  },
  setCat : function(index, newCat) {
    model.cats[index] = newCat;
  },
  incrementCounter : function(currentCat) {
    model.cats[currentCat].counter++;
    return model.cats[currentCat].counter;
  },
  setCurrentCat : function(index) {
    model.currentCat = index;
  },
  getCurrentCatIndex : function() {
    return model.currentCat;
  },
  getCurrentCat : function() {
    return model.cats[model.currentCat];
  },
  adminMode : false
};

var view = {
  catImage : document.getElementById('catImage'),
  catName : document.getElementById('catName'),
  catCounter : document.getElementById('catCounter'),
  catSelection : {
    init : function() {
      var catList = document.getElementById('catList');
      catList.innerHTML = '';
      var cats = controller.getCats();
      for (var i = 0; i < cats.length; i++) {
        var catListing = '<li><a href="#" onclick="view.catDetails.showCat('+i+')">' +cats[i].name+ '</a></li>';
        catList.innerHTML += catListing;
      }
    }
  },
  catDetails : {
    showCat : function(index) {
      document.getElementById('hideMe').style.display = "none";
      document.getElementById('showMe').style.display = "block";
      controller.setCurrentCat(index);
      var cat = controller.getCat(index);
      view.catImage.src = cat.image;
      view.catName.textContent = cat.name;
      view.catCounter.textContent = cat.counter;
      view.adminMode.render();
    },
    clickListener : function() {
      view.catImage.addEventListener('click', function(){
        var currentCat = controller.getCurrentCatIndex();
        var currentCount = controller.incrementCounter(currentCat);
        view.catCounter.textContent = currentCount;
      }, false);
    }
  },
  adminMode : {
    name : document.getElementById('name'),
    toggle : function() {
      if (!controller.adminMode) {
        controller.adminMode = true;
        document.getElementById('adminMode').style.display = "block";
        view.adminMode.render();
      } else {
        controller.adminMode = false;
        document.getElementById('adminMode').style.display = "none";
      }
    },
    render : function() {
      if (controller.getCurrentCatIndex() !== undefined) {
        var currentCat = controller.getCurrentCat();
        view.adminMode.name.value = currentCat.name;
      }
    },
    save : function() {
      var cat = controller.getCurrentCat();
      var index = controller.getCurrentCatIndex();
      cat.name = view.adminMode.name.value;
      controller.setCat(index, cat);
      view.catSelection.init();
      view.catDetails.showCat(index);
    }
  }
};

controller.init();
