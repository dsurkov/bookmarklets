javascript:(function()%7Bfunction%20checkFrames(w)%20%7Btry%20%7Bvar%20inputs%20%3D%20w.document.getElementsByTagName(%27input%27)%3Bfor%20(var%20i%3D0%3B%20i%20%3C%20inputs.length%3B%20i%2B%2B)%20%7Bif%20(inputs%5Bi%5D.type%20%26%26%20inputs%5Bi%5D.type%20%3D%3D%20%27checkbox%27)%7Binputs%5Bi%5D.checked%20%3D%20!inputs%5Bi%5D.checked%3B%7D%7D%7D%20catch%20(e)%7B%7Dif(w.frames%20%26%26%20w.frames.length%3E0)%7Bfor(var%20i%3D0%3Bi%3Cw%20.frames.length%3Bi%2B%2B)%7Bvar%20fr%3Dw.frames%5Bi%5D%3BcheckFrames(fr)%3B%7D%7D%7DcheckFrames(window)%3B%7D)()
