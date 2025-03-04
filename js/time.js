function updateDaylist() {
    const now = new Date();
    const hour= now.getHours();
    const imgElement = document.getElementById('time-based-image');
  
    let imgURL;
  
    if (hour >= 4 && hour < 7) {
        // Early Morning (4 AM - 6:59 AM)
        imgURL = '/assets/early_morning_daylist.jpg';
      } else if (hour >= 7 && hour < 12) {
        // Morning (7 AM - 11:59 AM)
        imgURL = '/assets/morning_daylist.jpg';
      } else if (hour >= 12 && hour < 17) {
        // Afternoon (12 PM - 4:59 PM)
        imgURL = '/assets/afternoon_daylist.jpg';
      } else if (hour >= 17 && hour < 20) {
        // Evening (5 PM - 7:59 PM)
        imgURL = '/assets/evening_daylist.jpg';
      } else if (hour >= 20 && hour < 23) {
        // Night (8 PM - 10:59 PM)
        imgURL = '/assets/night_daylist.jpg';
      } else {
        // Late-Night (11 PM - 3:59 AM)
        imgURL = '/assets/late_night_daylist.jpg';
      }

    // update src of img tag
    imgElement.src = imgURL;
  }

  updateDaylist();
  
  // update each minute
  setInterval(updateDaylist, 60000);