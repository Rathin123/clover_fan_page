module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");

    eleventyConfig.addPassthroughCopy("./src/frontend_js");
    eleventyConfig.addWatchTarget("./src/frontend_js");

    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addWatchTarget("./src/img");
    //some witchcraft glob below to get 11ty to copy all images -- use for static img
    eleventyConfig.addPassthroughCopy("./src/**/*.jpg");

    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        });
        //return the first element
        return arr.slice(0,1);
    });

    return{
        dir:{
            //setting input to "src" tells 11ty to watch for 
            //changes in src directory to build for production
            input: "src",

            //setting input to "output" directory 
            //this is where localhost will use files and 
            //hosting server will be published
            output: "public",
        },
    };
};