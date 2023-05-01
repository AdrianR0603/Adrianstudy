function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let random = getRandom(0, 30 )
        for (let i = 9; i >= 0; i--) {
            let num = prompt('请输入0-30中的一个数')
            if (num > random) {
                alert('你猜大了')
                if (i === 0) {
                    alert('你没机会了');
                } else {
                    alert(`你还有${i}次机会`)
                }
            } else if (num < random) {
                alert('你猜小了')
                if (i === 0) {
                    alert('你没机会了');
                } else {
                    alert(`你还有${i}次机会`)
                }
            } else {
                alert('你猜对了')
                break
            }
        }
