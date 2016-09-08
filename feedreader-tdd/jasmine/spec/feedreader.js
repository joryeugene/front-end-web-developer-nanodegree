// Tests for Feed Reader & app.js

// Tests are within $() function since some of these tests require DOM elements
$(function() {

    describe('RSS Feeds', function() {
        // allFeeds variable has been defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // each feed has a URL defined the URL is not empty
        it('should have a defined URL that is not empty', function() {
            for(var id=0; id<allFeeds.length; id++) {
                expect(allFeeds[id].url).toBeDefined();
                expect(allFeeds[id].url).not.toEqual("");
            }
        });

        // each feed has a name defined the name is not empty
        it('should have a defined name that is not empty', function() {
            for(var id=0; id<allFeeds.length; id++) {
                expect(allFeeds[id].name).toBeDefined();
                expect(allFeeds[id].name).not.toEqual("");
            }
        });
    });

    describe('The Menu', function() {
        var menu = document.getElementsByTagName("body")[0];

        it('element should be hidden by default by having class menu-hidden', function() {
            expect(menu.className).toContain("menu-hidden");
        });

        describe('when clicked', function() {
            var menuBtn = document.getElementsByClassName("menu-icon-link")[0];

            it('should display the menu', function() {
                menuBtn.click();
                expect(menu.className).not.toContain("menu-hidden");
            });

            it('should hide the menu', function() {
                menuBtn.click();
                expect(menu.className).toContain("menu-hidden");
            });
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has added entries', function() {
            var entry = document.querySelectorAll('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
              // get first entry from first feed
              entryOld = document.getElementsByClassName("entry")[0].innerHTML;

              // change feeds
              loadFeed(1, done);
            });
        });

        // when a new feed is loaded by the loadFeed function check that content actually changes
        it('should be new stuff', function() {
            // compare the first entries of the two feeds
            var entryNew = document.getElementsByClassName("entry")[0].innerHTML;
            expect(entryNew).not.toBe(entryOld);
        });

        // change back to first feed
        // afterEach(function() {
        //     loadFeed(0);
        // });
    });
}());
