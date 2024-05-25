// Zadanie 3. Profil gracza
const profile = {
	username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
    this.username = newName;
    },
    updatePlayTime(hours) {
    this.playTime += hours;
    },
    getInfo(){
        console.log(`${newName} ma ${playTime} aktywnych godzin!`);
    }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
