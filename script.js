02:13 PM<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>আমার ওয়েবসাইট</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>স্বাগতম আমার ওয়েবসাইটে 🌟</h1>
    <nav>
      <a href="#upload">ফাইল আপলোড</a>
      <a href="#social">সোশ্যাল লিংক</a>
    </nav>
  </header>

  <section id="upload" class="upload-section">
    <h2>ফাইল আপলোড করুন</h2>
    <form id="uploadForm">
      <input type="file" id="fileInput" required />
      <button type="submit">আপলোড</button>
    </form>
    <div id="preview"></div>
  </section>

  <section id="social" class="social-section">
    <h2>আমার সোশ্যাল লিংক</h2>
    <div class="social-links">
      <a href="https://facebook.com" target="_blank">📘 Facebook</a>
      <a href="https://youtube.com" target="_blank">▶️ YouTube</a>
      <a href="https://instagram.com" target="_blank">📸 Instagram</a>
    </div>
  </section>

  <footer>
    <p>&copy; ২০২৫ আমার ওয়েবসাইট। সব অধিকার সংরক্ষিত।</p>
  </footer>

  <script src="script.js"></script>
</body>
</html><!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>আমার ওয়েবসাইট</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>স্বাগতম আমার ওয়েবসাইটে 🌟</h1>
    <nav>
      <a href="#upload">ফাইল আপলোড</a>
      <a href="#social">সোশ্যাল লিংক</a>
    </nav>
  </header>

  <section id="upload" class="upload-section">
    <h2>ফাইল আপলোড করুন</h2>
    <form id="uploadForm">
      <input type="file" id="fileInput" required />
      <button type="submit">আপলোড</button>
    </form>
    <div id="preview"></div>
  </section>

  <section id="social" class="social-section">
    <h2>আমার সোশ্যাল লিংক</h2>
    <div class="social-links">
      <a href="https://facebook.com" target="_blank">📘 Facebook</a>
      <a href="https://youtube.com" target="_blank">▶️ YouTube</a>
      <a href="https://instagram.com" target="_blank">📸 Instagram</a>
    </div>
  </section>

  <footer>
    <p>&copy; ২০২৫ আমার ওয়েবসাইট। সব অধিকার সংরক্ষিত।</p>
  </footer>

  <script src="script.js"></script>
</body>
</html><!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title> </title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>   </h1>
    <nav>
      <a href="#upload"> </a>
      <a href="#social"> </a>
    </nav>
  </header>

  <section id="upload" class="upload-section">
    <h2>  </h2>
    <form id="uploadForm">
      <input type="file" id="fileInput" required />
      <button type="submit"></button>
    </form>
    <div id="preview"></div>
  </section>

  <section id="social" class="social-section">
    <h2>  </h2>
    <div class="social-links">
      <a href="https://facebook.com" target="_blank"> Facebook</a>
      <a href="https://youtube.com" target="_blank"> YouTube</a>
      <a href="https://instagram.com" target="_blank"> Instagram</a>
    </div>
  </section>

  <footer>
    <p>&copy;      </p>
  </footer>

  <script src="script.js"></script>
</body>
</html>document.getElementById("uploadForm").addEventListener("submit", function (e) {<br/>  e.preventDefault();<div></div>  const fileInput = document.getElementById("fileInput");<br/>  const preview = document.getElementById("preview");<br/>  const file = fileInput.files[0];<div></div>  if (!file) {<br/>    alert("ржжржпрж╝рж╛ ржХрж░рзЗ ржПржХржЯрж┐ ржлрж╛ржЗрж▓ ржирж┐рж░рзНржмрж╛ржЪржи ржХрж░рзБржиред");<br/>    return;<br/>  }<div></div>  const fileURL = URL.createObjectURL(file);<br/>  const fileType = file.type;<div></div>  preview.innerHTML = "";<div></div>  if (fileType.startsWith("image/")) {<br/>    const img = document.createElement("img");<br/>    img.src = fileURL;<br/>    preview.appendChild(img);<br/>  } else if (fileType.startsWith("video/")) {<br/>    const video = document.createElement("video");<br/>    video.src = fileURL;<br/>    video.controls = true;<br/>    preview.appendChild(video);<br/>  } else if (fileType === "application/pdf") {<br/>    const link = document.createElement("a");<br/>    link.href = fileURL;<br/>    link.textContent = "ЁЯУД PDF ржжрзЗржЦрзБржи";<br/>    link.target = "_blank";<br/>    preview.appendChild(link);<br/>  } else {<br/>    preview.textContent = "ржлрж╛ржЗрж▓ рж╕ржлрж▓ржнрж╛ржмрзЗ ржирж┐рж░рзНржмрж╛ржЪрж┐ржд рж╣ржпрж╝рзЗржЫрзЗ ржХрж┐ржирзНрждрзБ ржкрзНрж░рж┐ржнрж┐ржЙ ржжрзЗржЦрж╛ржирзЛ ржпрж╛ржмрзЗ ржирж╛ред";<br/>  }
