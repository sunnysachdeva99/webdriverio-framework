class HomePage{

    get pageHeader()
    {
        return $('h1')
    }

    get subHeading()
    {
        return $('div.banner-text-content > p.sub-text')
    }

    get supportLink()
    {
        return $("//a[text()='Support']")
    }
}

module.exports = new HomePage();