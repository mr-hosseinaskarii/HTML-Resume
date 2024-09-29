const terminalContent = document.getElementById('terminalContent');
const skills = ['Python', 'Linux', 'Django', 'Docker', 'API', 'SQL', 'Git'];
let currentSkillIndex = 0;

function typeSkill(skill) {
    return new Promise(resolve => {
        let i = 0;
        const intervalId = setInterval(() => {
            terminalContent.innerHTML += skill[i];
            i++;
            if (i === skill.length) {
                clearInterval(intervalId);
                resolve();
            }
        }, 100);
    });
}

async function animateTerminal() {
    while (true) {
        terminalContent.innerHTML = '$ Hossein.expertise["backend"] = [';
        await typeSkill(skills[currentSkillIndex]);
        await new Promise(resolve => setTimeout(resolve, 1000));
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
        terminalContent.innerHTML += ']';
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

animateTerminal();


document.addEventListener('DOMContentLoaded', () => {
const skillLevels = document.querySelectorAll('.skill-level');
skillLevels.forEach(skill => {
    const width = skill.style.width;
    skill.style.width = '0%';
    setTimeout(() => {
        skill.style.width = width;
    }, 500);
});
});