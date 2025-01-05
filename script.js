// Show surprise message when the box is clicked
document.getElementById('box').addEventListener('click', function() {
 document.getElementById('box').style.display = 'none';
 document.getElementById('surprise-message').style.display = 'block';
});

// Show the box again when the "Open Again" button is clicked
document.querySelector('.again-btn').addEventListener('click', function() {
 document.getElementById('box').style.display = 'flex';
 document.getElementById('surprise-message').style.display = 'none';
});
