
document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");
  const downloadArea = document.getElementById("downloadArea");
  const downloadLink = document.getElementById("downloadLink");
  const file = fileInput.files[0];

  if (!file) {
    alert("⚠️ দয়া করে একটি ফাইল নির্বাচন করুন।");
    return;
  }

  const fileURL = URL.createObjectURL(file);
  const fileType = file.type;

  preview.innerHTML = "";
  downloadLink.href = fileURL;
  downloadLink.download = file.name;
  downloadArea.style.display = "block";

  if (fileType.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = fileURL;
    preview.appendChild(img);
  } else if (fileType.startsWith("video/")) {
    const video = document.createElement("video");
    video.src = fileURL;
    video.controls = true;
    video.width = 300;
    preview.appendChild(video);
  } else if (fileType === "application/pdf") {
    const iframe = document.createElement("iframe");
    iframe.src = fileURL;
    iframe.width = "90%";
    iframe.height = "400px";
    preview.appendChild(iframe);
  } else {
    preview.innerHTML = "✅ ফাইল সিলেক্ট হয়েছে! প্রিভিউ দিতে পারছি না।";
  }

  alert("✅ ফাইল আপলোড সফল! নিচ থেকে ডাউনলোড করুন।");
});
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
</html>document.getElementById("uploadForm").addEventListener("submit", function (e) {<br/>  e.preventDefault();<div></div>  const fileInput = document.getElementById("fileInput");<br/>  const preview = document.getElementById("preview");<br/>  const file = fileInput.files[0];<div></div>  if (!file) {<br/>    alert("ржжржпрж╝рж╛ ржХрж░рзЗ ржПржХржЯрж┐ ржлрж╛ржЗрж▓ ржирж┐рж░рзНржмрж╛ржЪржи ржХрж░рзБржиред");<br/>    return;<br/>  }<div></div>  const fileURL = URL.createObjectURL(file);<br/>  const fileType = file.type;<div></div>  preview.innerHTML = "";<div></div>  if (fileType.startsWith("image/")) {<br/>    const img = document.createElement("img");<br/>    
