        function myFunc(){
            var pTag = document.getElementsByTagName('p');
            console.log(pTag);
            // console.log(pTag[0].innerHTML);
            // console.log(pTag[0].childNodes[0].baseURI);
        }
        function myFunc1(){
            var tag = "<ul><li>first</li><li>second</li></ul>"
            document.getElementById('result').innerHTML = tag;
        }