
urlParams = new URLSearchParams(window.location.search);
document.getElementById('searchBox').value = urlParams.get('search')
const local_path = './data/';
const remote_path = 'https://raw.githubusercontent.com/HCI-Charity-Team/charity-site/connor-branch/data/';
var selected_tag;
var clist;
let causes;
causes = ["all", "animals", 'arts', 'environment', 'education', 'health', 'human services', 'mental health', 'women', 'stem'];
function filter_charities(charity_list, cause) {
    
    //var charity_list = list_object[0]
    //var cause = list_object[1]
    console.clear();
    console.log(charity_list);
    console.log(cause);
    for (org of charity_list.organizations) {
        
        if ((org.category === cause) || (cause === 'all')) {
            // DO SOMETHING WITH THE ORGANIZATIONS ONCE THEY'RE FILTERED
            
            console.log("NAME: " + org.name + " CAUSE: " + org.category);
            console.log(cause)
        }
        
        //document.write("<br>");

    }
};

function set_charities(charity_list)  {
    //console.log(charity_list);
    clist = charity_list;
    return clist;
};
const load_charities = () => {
    //selected_tag = cause;

    fetch(remote_path + 'charities.json')
    .then((response) => {
        return response.json();
    })
    .then((charity_list) => {
        set_charities(charity_list);
    });
    //return charity_list;
    /*
        .then((response) => {
            return response.json();
            //charity_list = response.json();
        })
        .then(write_charities(charity_list, selected_tag));*/
};


//document.querySelector('.category').onclick = load_charities(document.getElementsByClassName('category')[1].textContent.toLowerCase());
const buttons_arr = document.querySelectorAll('.category');
set_charities(load_charities());
console.log(clist);
//clist = JSON.parse(clist);

let idx = 0;

buttons_arr.forEach(function(button, index, array){
    cause = document.getElementsByClassName('category')[index].textContent.toLowerCase();
    button.onclick = function() { 
        cause = causes[index];
        filter_charities(clist, cause)
    };
});
    
        




// GET ARRAY OF ALL CATEGORY OBJECTS VIA querySelectorAll, THEN DO THE ABOVE CODE ON EVERY ELEMENT TO GET CAUSE NAME OF BUTTON

//filter_charities(clist, 'mental health');

