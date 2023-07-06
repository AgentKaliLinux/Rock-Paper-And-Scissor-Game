
var randomImgArr = ['/assets/rock.jpg', '/assets/paper.png', '/assets/scissor.png'];

function computerMove() {

    var randomNumber = Math.floor(Math.random() * 3);
    var randomImg = randomImgArr[randomNumber];
    $('#cMove').attr('src', randomImg);

}

function playerMove() {

    $('.btn').click(function () {
        var btnId = $(this).attr('id');
        if (btnId === 'rock') {
            $('#hMove').attr('src', '/assets/rock.jpg');
        }
        else if (btnId === 'paper') {
            $('#hMove').attr('src', '/assets/paper.png');
        }
        else if (btnId === 'scissor') {
            $('#hMove').attr('src', '/assets/scissor.png');
        }

        computerMove();

        var cMove = $('#cMove').attr('src');
        var hMove = $('#hMove').attr('src');

        if (hMove === '/assets/rock.jpg') {
            if (cMove === '/assets/rock.jpg') {
                $('#info').text("Match is Tie");
            }
            else if (cMove === '/assets/scissor.png') {
                $('#info').text("Congragulations!, You Won");
            }
            else if (cMove === '/assets/paper.png') {
                $('#info').text("You lose the match");
            }
        }

        else if (hMove === '/assets/paper.png') {
            if (cMove === '/assets/paper.png') {
                $('#info').text("Match is Tie");
            }
            else if (cMove === '/assets/rock.jpg') {
                $('#info').text("Congragulations!, You Won");
            }
            else if (cMove === '/assets/scissor.png') {
                $('#info').text("You lose the match");
            }
        }

        else if (hMove === '/assets/scissor.png') {
            if (cMove === '/assets/scissor.png') {
                $('#info').text("Match is Tie");
            }
            else if (cMove === '/assets/paper.png') {
                $('#info').text("Congragulations!, You Won");
            }
            else if (cMove === '/assets/rock.jpg') {
                $('#info').text("You lose the match");
            }
        }
    })


}

playerMove()