    $(function(){
        $('#begin_2').click(function() {
            $('.whole_div').css('display', 'none');
            $('.test:first').css('display', 'block');
        });

        $('#play1').click(function () {
            $(this).hide();
            document.getElementById("video1").play();
        });
        $('#play2').click(function () {
            $(this).hide();
            document.getElementById("video2").play();
        });
        $('#play3').click(function () {
            $(this).hide();
            document.getElementById("video3").play();
        });
        $('#play4').click(function () {
            $(this).hide();
            document.getElementById("video4").play();
        });

        document.getElementById("video1").addEventListener("ended",function(){
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        document.getElementById("video2").addEventListener("ended",function(){
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        document.getElementById("video3").addEventListener("ended",function(){
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        document.getElementById("video4").addEventListener("ended",function(){
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });

        $('#next_page').click(function () {
            $(this).addClass('on');
            document.getElementById("video1").pause();
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page-v1').click(function () {
            $(this).addClass('on');
            document.getElementById("video2").pause();
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page-v2').click(function () {
            $(this).addClass('on');
            document.getElementById("video3").pause();
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page-v3').click(function () {
            $(this).addClass('on');
            document.getElementById("video4").pause();
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page2').click(function () {
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page3').click(function () {
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page4').click(function () {
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page5').click(function () {
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page6').click(function () {
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page7').click(function () {
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $(this).parents('div').next('div').css('display','block');
        });
        $('#next_page8').click(function () {
            $(this).addClass('on');
            $(this).parents('div').css('display','none');
            $('#section-one').html($("#text-sc1").val());
            $('#section-two-po').html(" &nbsp;&nbsp;&nbsp;&nbsp;(1) " + $("#table-positive-1").val()+";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(2) "+$("#table-positive-2").val()+";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(3) "+$("#table-positive-3").val()+";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(4) " + $("#table-positive-4").val()+ ";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(5) " + $("#table-positive-5").val()+";");
            $('#section-two-ne').html(" &nbsp;&nbsp;&nbsp;&nbsp;(1) " + $("#table-negative-1").val()+";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(2) "+$("#table-negative-2").val()+";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(3) "+$("#table-negative-3").val()+";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(4) " + $("#table-negative-4").val()+ ";<br /> &nbsp;&nbsp;&nbsp;&nbsp;(5) " + $("#table-negative-5").val()+";");
            $('#section-three-1').html($("#text-sc3-1").val());
            $('#section-three-2').html($("#text-sc3-2").val());
            $('#section-four-1').html($("#text-sc4-1").val());
            $('#section-four-2').html($("#text-sc4-2").val());
            $('#section-five').html($("#text-sc5").val());
            $('#level1').css('display','block');
        });
        $('#play_video1').click(function () {
            document.getElementById("video1").play();
            $(this).hide();
        });});