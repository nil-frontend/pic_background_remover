
let profilePic = document.getElementById("image");
let inputFile = document.getElementById("fileInput");
        
inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
};


{/* <div id="" style="height:41rem;">
            <img id="image" src="/photos/done-code tick png.png" />
          </div> */}

          let imageURL;

          function submitHandler() {
            console.log("click");
            const fileInput = document.getElementById("fileInput");
            console.log(fileInput.files);
            const image = fileInput.files[0];
    
            // Multipart file
            const formData = new FormData();
            formData.append("image_file", image);
            formData.append("size", "auto");
    
            // const apiKey = "7kzU8R5gSQvqPxVg2wzSWWXd";
            const apiKey = "ut55h2TNEYwaGBgesV6FJzt6";
    
            fetch("https://api.remove.bg/v1.0/removebg", {
              method: "POST",
              headers: {
                "X-Api-Key": apiKey,
              },
              body: formData,
            })
              .then(function (reponse) {
                return reponse.blob();
              })
              .then(function (blob) {
                console.log(blob);
                const url = URL.createObjectURL(blob);
                imageURL = url;
                const img = document.createElement("img");
                img.src = url;
                const ff = document.getElementById("imageRmv")
                // document.body.appendChild(img);
                ff.appendChild(img);
              })
              .catch();
          }
    
          function downloadFile() {
            var a = document.createElement("a"); //<a></a>
            a.href = imageURL;
            a.download = "naciasv.png";
            document.body.appendChild(a);
    
            a.click();
    
            document.body.removeChild(a);
          }