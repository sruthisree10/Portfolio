var typed = new Typed(".text", {
    strings: ["Student", "Developer", "Tech Enthusiast"], // Add more strings if desired
    typeSpeed: 100,  // Speed at which each character is typed
    backSpeed: 50,   // Speed at which each character is deleted (reduced for smoother animation)
    backDelay: 1500, // Delay before starting to delete the text
    startDelay: 500, // Delay before typing starts
    loop: true,      // Loop the animation indefinitely
    showCursor: true, // Display the blinking cursor at the end
    cursorChar: "|",  // Customize the cursor character
});
