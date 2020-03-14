# Cors Tester 

Simple cors tester with ajax

# How to test

In cors_test.js you can see a variable **url**, only edit with url that you want and open index.html in browser and see the console.

# Example
in cors_test.js:

    function main() 
    {
        console.log("ajax request to check if cors is enabled");
        $.ajax
        ({
            dataType: "json",
            url: "http://google.com",
            success: function(data) 
            {
                console.log("log response on success");
                console.log(data);
            }
        });
    }

Modify **url** to your test url, for example `http://localhost:8080/all`

    function main() 
        {
            console.log("ajax request to check if cors is enabled");
            $.ajax
            ({
                dataType: "json",
                url: "http://localhost:8080/all",
                success: function(data) 
                {
                    console.log("log response on success");
                    console.log(data);
                }
            });
        }


