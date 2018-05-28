TechLabs Website Development

# Setup
Development on the TechLabs website shall be as convenient as possible. Git and Gulp facilitate collaboration and automate workflows so there is more time left for cake and drinks.

### Requirements

+ git  
*Version control system*
+ git-ftp  
*Push git repository to webserver via FTP*
+ Node.js  
*JavaScript runtime*
+ npm  
*Package manager vor Node*
+ gulp  
*Workflow automation for Node*

### Set up git
+ Create GitHub account
   https://github.com/join
+ Install git
https://git-scm.com/
+ Check version  
``$ git --version``
+ Config git  
``$ git config --global user.name "Max Mustermann"``  
``$ git config --global user.email max.mustermann@example.com``

*More: https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf*

### Set up git-ftp
+ Install https://github.com/git-ftp/git-ftp/blob/master/INSTALL.md
+ Check version  
``$ git-ftp --version``
+ Config git-ftp  
``$ git config git-ftp.url=[ftp://HOST:PORT]``  
``$ git config git-ftp.user=[USERNAME]``  
``$ git config git-ftp.password=[PASSWORD]``  

*More: https://github.com/git-ftp/git-ftp/blob/master/man/git-ftp.1.md*

### Install Node.js
+ Install https://nodejs.org/en/download/
+ Check Node version  
``$ node -v``  
+ Check npm version  
``$ npm -v``


### Install gulp (as npm global package)  
+ Install  
``$ npm install --global gulp-cli``  
+ Check version & list installed packages  
``$ npm list --global --depth=0``

*More:  
https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md
https://docs.npmjs.com/cli/install*

### Install npm local packages
+ ``$ cd /Documents/GitHub/[repository]``  
+ Packages for production
``$ npm install --save [pckg-name]``  
*Never miss the --option! Otherwise the package will not be specified in package.json*
+ Packages for development & build purposes  
``$ npm install --save-dev [pckg-name]``

# Getting started

### **1. Download the repository**
Clone the development branch.  
``$ git clone https://github.com/davidmidd/techlabs_website.git``

Node modules / npm packages and other files and directories specified in ``.gitignore`` are not synced to GitHub. The will be installed in the next step.

### **2. Initialize as npm package**
After pulling the repository you need to initialize npm in the directory.   
``$ npm init``  
This will trigger the installation of all dependencies specified in ``package.json`` as well as their sub-dependencies. **It might take a while**, be patient. See also https://docs.npmjs.com/cli/init

All locally installed npm packages are stored in ``node_modules``. They contain the source code we build upon, hence, they are **not to be touched**. This makes updating a breeze.


### **3. Understand building with Gulp**
Customizations to the source code are introduced through custom files in ``/scss`` and ``/js_custom``. When running a build-job Gulp compiles the appropriate output files in CSS and JavaScript.

Customizations to the building process are specified in ``gulpfile.js``. Files and directories specified in ``.npmignore`` are not compiled.

### **4. Get an overview**

#### Structure
general: *_archive* and *_legacy* directories are up for deletion after relaunch.

Folders | Details
--- | ---
``/_archive`` | *old content already incorporated in new layout*
``/_inspiration`` | *creative material guiding the UX dev process*
``/_paste`` | *old content not yet incorporated into new layout*
``/assets`` | *images, icons, svg, downloadable files*
``/css`` | *output-directory for SCSS build tasks*
``/fonts``| *webfonts*
``/js`` | *output-directory for JS build tasks*
``/js_custom`` | *custom scripts*
``/node_modules`` | *npm packages & source code*
``/scss`` | *custom scss files*
``/tmp`` | *temporary storage*

**Files (in development)** | **Details**
--- | ---
``.gitignore`` | *specifies which directories and files are not synced to GitHub*
``.npmignore`` | *specifies which directories and files are not searched for files when running build tasks*
``gulpfile.js`` | *specifies automated workflows and build tasks*
``package.json`` | *specifies dependencies for the website package*
``package-lock.json`` | *keeps track of changes to package.json*

**Files (in production)** | **Details**
--- | ---
``.htaccess`` | *specifies webserver settings such as redirects, error handling, webserver modules*
``sitemap.xml`` | *facilitates page crawling*
``robots.txt`` | *specifies read-rights for crawlers*
``index.html`` | *start page*



### **5. Start coding**

#### Stick to workflow
+ HTML: (git pull) > change code > run local test > git commit & push
+ SCSS: (git pull) > change code > run build-task > run local test > git commit & push
+ JS: [like SCSS]
+ other assets: (git pull) > change > run local test > git commit & push

#### Stick to standards
``Bootstrap``, ``Spectre`` and ``Uikit`` are very well-documented frameworks. Take more than one close look into the documentation. Do other developers a favor and customize just as much code as is actually needed. Use **HTML5 markup** to structure the document and the style-classes the frameworks come with. Think about whether you might want to re-use code somewhere else - if so, establish **global styles**. If not, be specific and create **nested styles** to reduce the risk of conflicting with other elements.

https://getbootstrap.com/docs/4.1/getting-started/introduction/  
https://getuikit.com/docs/introduction  
https://picturepan2.github.io/spectre/getting-started.html


#### Push regularly
Keep your fellows in the loop by pushing your precious code to the cloud when you're done testing it. Conflict resolution takes time.

#### Customize SCSS (!todo!)
https://sass-lang.com/guide

@import, 
order,
variables,

https://getbootstrap.com/docs/4.1/getting-started/theming/  
https://getuikit.com/docs/sass  
https://picturepan2.github.io/spectre/getting-started.html#custom

#### Focus on mobile first

#### Add new ressources
via npm

#### Tweak performance
PageSpeed Insight  
Chrome Developer Tools  
Fonts


# Building
run tasks selectively  


# Upload to FTP-Server
+ *(Only! if you are the first admin ever to push from git to FTP: initialize the remote directory at first: $ git ftp init)*
+ Instead, state your local directory is identical to the remote dir!  
``$ git ftp catchup``
+ Push the latest commit to remote dir  
``$ git ftp push``


# To-do notes
add fontawesome to gulp tasks  
add source maps to gulp tasks  
add svg-minify to local node_modules  
check image-minify
check AMP  
check Integration with FB Feed,Insta-Feed, Medium <> Blog-Page   
check YouTube Live Notice
check 

finish readme section 5 and following

check Jekyll

Hosting:  
GitHub Pages  
Cloudflare CDN <> node Integration  
SendGrid free