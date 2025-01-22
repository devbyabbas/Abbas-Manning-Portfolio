// Smooth scrolling for nav links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const typed = new Typed("#multiProfession", {
    strings: ["FRONTEND", "WEBFLOW", "SHOPIFY"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


$(document).ready(function(){

    // Social media Tooltips
    $('.social-media-link').hover(function(){
        $(this).find('.social-media-link-info').show();
    }, function(){
        $(this).find('.social-media-link-info').hide();
    });

    // Download resume button
    $(".resume-btn").click(function(e) {
        window.open("images/Logo.png", "_blank");
    });

    // History Section Tabs
    $(".experience-tab").click(function(e){
        $(".experience-tab").removeClass("active-experience-tab");
        $(this).addClass("active-experience-tab");

        $(".experience-content").removeClass(".active-experience-content");

        const experienceTabId = $(this).attr("id");
        const experienceContentId = "#experienceContent" + experienceTabId.substring(13);

        $(".experience-content").hide();
        $(experienceContentId).show();
    });


    // Project Section Tabs
    function updatePortfolioLine(clickedTab){
        const PortfolioTabWidth = clickedTab.outerWidth();
        const PortfolioTabLeft = clickedTab.position().left;
        $('.portfolio-line').css({
            'left': PortfolioTabLeft,
            'width': PortfolioTabWidth
        })
    }

    updatePortfolioLine($('.portfolio-tab.active-portfolio-tab'))

    $('.portfolio-tab').click(function() {
        $('.portfolio-tab').removeClass('active-portfolio-tab')
        $(this).addClass('active-portfolio-tab')
        
        updatePortfolioLine($(this));
        
        // Filter Projects
        const filter = $(this).data('filter');
        
        if(filter === 'all'){
            $('.portfolio-project').removeClass('hidden-project');
        }else{
            $('.portfolio-project').addClass('hidden-project');
            $('.portfolio-project[data-type="'+ filter +'"]').removeClass('hidden-project');
        }
    }); 

    //Project Background Images
    const projectBackgroundImages = [
        "url('images/codepen-logo.png')",
        "url('images/prrrfume-thumbnail.png')"
    ];

    $(".portfolio-project").each(function (index) {
        $(this).css("background-image", projectBackgroundImages[index]);
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-size", "cover");
        $(this).css("background-position", "center");
    });

    //Project Overlay
    $(".portfolio-project").hover(
        function() {
            $(this).find(".portfolio-overlay").show();
        },
        function() {
            $(this).find(".portfolio-overlay").hide();
        }
    );

    //Preventing Contact Form from Redirecting
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        
        $('.message-success').fadeIn(1000);
        $('#contactForm').fadeOut(1000);
        $('#contactForm')[0].reset();

        setTimeout(function(){
            $('.message-success').fadeOut(1000);
            $('#contactForm').fadeIn(1000);
        }, 10000);
         
    });
}); 
