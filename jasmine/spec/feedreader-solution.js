$(function() {
  describe('RSS Feeds', function() {
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('all have a URL defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });

    it('all have a name defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });
  });

  describe('The menu', function() {
    var body = $('body'),
        menuIcon = $('.menu-icon-link');

    it('is hidden by default', function() {
      expect(body.hasClass('menu-hidden')).toBe(true);
    });

    it('changes visibility when the menu link is clicked', function() {
      var currentClass = body.attr('class')
          expectedNewClass = (body.hasClass('menu-hidden')) ? '' : 'menu-hidden';

      menuIcon.click();
      expect(body.attr('class')).toBe(expectedNewClass);

      menuIcon.click();
      expect(body.attr('class')).toBe(currentClass);
    });
  });


  describe('Initial entries', function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('have at least one entry', function(done) {
      var numEntries = $('.feed .entry').length;
      console.log(numEntries);
      expect(numEntries).toBeGreaterThan(0);
      done();
    });
  });

  describe('New feed selection', function() {
    var currentContent;

    beforeEach(function(done) {
      currentContent = $('.feed').html();
      loadFeed(1, function() {
        done();
      });
    });

    it('changes the content displayed', function(done) {
      var newContent = $('.feed').html();
      expect(currentContent).not.toBe(newContent);
      done();
    });
  });
}());
