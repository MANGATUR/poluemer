
let allVideos = [];
window.onload = () => {
  fetch('data/videos.json')
    .then(res => res.json())
    .then(data => {
      allVideos = data;
      renderVideos(data);
    });
};
function renderVideos(videos) {
  const container = document.getElementById('videoList');
  container.innerHTML = "";
  videos.forEach(video => {
    const card = `
      <div class="video-card" data-category="${video.category}">
        <a href="video.html?id=${video.id}">
          <img src="thumbnails/${video.thumbnail}" alt="${video.title}">
          <h3>${video.title}</h3>
        </a>
      </div>`;
    container.innerHTML += card;
  });
}
function searchVideos() {
  const keyword = document.getElementById('search').value.toLowerCase();
  const filtered = allVideos.filter(v =>
    v.title.toLowerCase().includes(keyword)
  );
  renderVideos(filtered);
}
function filterCategory(category) {
  if (category === 'all') {
    renderVideos(allVideos);
  } else {
    const filtered = allVideos.filter(v => v.category === category);
    renderVideos(filtered);
  }
}
