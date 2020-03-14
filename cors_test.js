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