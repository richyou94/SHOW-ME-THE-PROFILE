const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="row profile">
                <div class="col-5 text-center">
                    <img class="responsive-image"src="../assets/images/manager.png">
                </div>
                <div class="col-7">
                    <div class="header">
                        <h2 class="head-element">${manager.getName()}</h2>
                        <h3 class="head-element"><img class="icon" src="../assets/images/icon-manager.png">${manager.getRole()}</h3>
                    </div>
                    <div class="information-table">
                        <h4 class="border-line">ID: ${manager.getId()}</h4>
                        <h4 class="border-line">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
                        <h4 class="border-line">Office Number: ${manager.getOfficeNumber()}</h4>
                    </div>
                </div>
            </div>
        `
    };

    const generateEngineer = engineer => {
        return `
        <div class="row profile">
                <div class="col-5 text-center">
                    <img class="responsive-image" src="../assets/images/engineer-${engineer.getGender()}.png">
                </div>
                <div class="col-7">
                    <div class="header">
                        <h2 class="head-element">${engineer.getName()}</h2>
                        <h3 class="head-element"><img class="icon" src="../assets/images/icon-engineer.png">${engineer.getRole()}</h3>
                    </div>
                    <div class="information-table">
                        <h4 class="border-line">ID: ${engineer.getId()}</h4>
                        <h4 class="border-line">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
                        <h4 class="border-line">GitHub: <a href="github.com/${engineer.getGithub()}" target="_blank" >${engineer.getGithub()}</a></h4>
                    </div>
                </div>
            </div>
        `
    };

    const generateIntern = intern => {
        return `
        <div class="row profile">
                <div class="col-5 text-center">
                    <img class="responsive-image" src="../assets/images/intern-${intern.getGender()}.png">
                </div>
                <div class="col-7">
                    <div class="header">
                        <h2 class="head-element">${intern.getName()}</h2>
                        <h3 class="head-element"><img class="icon" src="../assets/images/icon-intern.png">${intern.getRole()}</h3>
                    </div>
                    <div class="information-table">
                        <h4 class="border-line">ID: ${intern.getId()}</h4>
                        <h4 class="border-line">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h4>
                        <h4 class="border-line">School: ${intern.getSchool()}</h4>
                    </div>
                </div>
            </div>
        `
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>SHOW ME THE PROFILES</title>
    </head>
    <body>
        <header class = "container-fluid text-center">
            <h1>SHOW ME THE PROFILES!</h1>
        </header>
        <div class="row container-fluid whole-container main-section">
            <aside class="col-md-2 container sidebar text-center">
                <ul>
                    <li><button type="button" class="btn btn-primary sidebar-link" href="#">JARED</button></li>
                    <li><button type="button" class="btn btn-primary sidebar-link" href="#">ALEC</button></li>
                    <li><button type="button" class="btn btn-primary sidebar-link" href="#">GRACE</button></li>
                    <li><button type="button" class="btn btn-primary sidebar-link" href="#">TAMMER</button></li>
                    <li><button type="button" class="btn btn-primary sidebar-link" href="#">JOHN</button></li>
                </ul>
            </aside>
            <main class="col-md-10 container-fluid">
                ${generateTeam(team)}
            </main>
        </div>
        
    
        <!-- Bootstrap script -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}