 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }


  test('test should run and 2 should equal 2', () =>{
    expect(2).toBe(2)
  })

 
  

  describe('testData tests', () => {
    test('the first name of the test data should be patton', ()=>{
      expect(testData.firstName).toBe('Patten')})
    test('the last name of the test data should be goforth', ()=>{
      expect(testData.lastName).toBe('Goforth')})

  })


  describe('formatTitle tests', ()=>{
    test('formatTitle should return a string', ()=>{
      let formattedTitle = formatTitle(testData.title) 
      expect(typeof formattedTitle).toBe('string')
    })
    test('formatTitle functions should format title correctly', ()=>{
      let formattedTitle = formatTitle(testData.title) 
      expect(formattedTitle).toBe('Nulla Ac')
    })
  }
  )

  describe('shortenBio tests', ()=>{
    test('should return a shortened version of bio',()=>{
      let shortBio = shortenBio(testData.bio.length)
      expect(shortBio.length).toBeLessThan(testData.bio.length)
    })

    test('shortenBio should contain elpipses', ()=>{
      let shortBio = shortenBio(testData.bio)
      expect(shortBio).toContain('...')
    })
  })