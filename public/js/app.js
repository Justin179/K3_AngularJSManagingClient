angular.module('TestApp',[]);

angular.module('TestApp').controller('MainController',ctrlFunc);

function ctrlFunc(){
    // THIS REFERS TO THE MainController as vm
    this.message = 'Hello Justin';

    this.people = [
        {name:'John Doe'},
        {name:'Jane Doe'},
        {name: 'Jim Doe'}
    ];
}
