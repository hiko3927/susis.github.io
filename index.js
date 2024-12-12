<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HERMOSA</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #ffe6f0;
            color: #ff3366;
        }
        button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #ff99cc;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #ff66b3;
        }
        img {
            margin-top: 20px;
            max-width: 300px;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Te amo muchísimo</h1>
    <p>Eres la mejor del mundo mundial</p>
    <button id="btnHeart">Púlsame</button>
    <div id="content"></div>

    <script>
        const button = document.getElementById("btnHeart");
        const content = document.getElementById("content");
        let heartShown = false;

        button.addEventListener("click", () => {
            if (!heartShown) {
                const heartImage = document.createElement("img");
                heartImage.src = "https://c.tenor.com/QaPEi-tcFXQAAAAd/tenor.gif";
                heartImage.alt = "Corazón";
                content.appendChild(heartImage);

                const secondButton = document.createElement("button");
                secondButton.textContent = "Vuelve a pulsarme";
                secondButton.addEventListener("click", () => {
                    const catImage = document.createElement("img");
                    catImage.src = "https://media.tenor.com/D3Owbj5xGUYAAAAM/cat-cats.gif";
                    catImage.alt = "Gato";
                    content.appendChild(catImage);
                });
                content.appendChild(secondButton);

                heartShown = true;
            }
        });
    </script>
</body>
</html> 
