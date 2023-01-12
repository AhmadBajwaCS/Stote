export const getRandomColor = ()=>{
    const color = ['#282828', '#C1FFB7', '#C7FBFF', '#FFE0CE', '#FFEEB4'];
   

    return(color[Math.floor(Math.random() * color.length)]);
    };
 



export default getRandomColor;