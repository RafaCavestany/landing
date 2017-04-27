// List the sections here
var sections = [
  {
    name: 'intro'
  },
  {
    name: 'about'
  },
  {
    name: 'work'
  },
  {
    name: 'project'
  }
]

// This code is based on this pen: https://codepen.io/daveredfern/pen/zBGBJV
$(document).ready(function() {
  handleNewSection(sections[0].name);
});

$(window).scroll(function() {
  navigate();
}).scroll();

// Save currentSection and update it when scrolling / navigating.
var currentSection;
// Save currentScroll to know our scroll;
var currentScroll;
// Save currentScrollDirection to know where we're going.
var currentScrollDirection;

function navigate() {
  var $window = $(window),
    $sections = $('.js-section'),
    header = $('header'),
    header_height = header.outerHeight();

  var cur_pos = $(this).scrollTop();

  // Check for scroll direction
  if (currentScroll > scroll) {
    currentScrollDirection = 'up';
  } else if (currentScroll < scroll) {
    currentScrollDirection = 'down';
  }

  currentScroll = scroll;

  $sections.each(function() {
    var top = $(this).offset().top - header_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      var section = $(this).data('name');
      // If the section is a new section
      if (section !== currentSection) {
        // Change currentSection
        currentSection = section;
        handleNewSection(currentSection, currentScrollDirection);
      }
      // do nothing instead (performance)
    }
  });
}

// When a new section is selected, do whatever is necessary
function handleNewSection(newSection, currentScrollDirection) {
  // Update section name at current section text.
  $('.js-current-section').html(newSection);
  // First page
  if (newSection === sections[0].name) {
    // If our section is intro, hide the arrow up.
    var $arrowUp = $('.js-arrow-up');
    $arrowUp.addClass('hidden');
    // Set second section as next section
    setNextSection(sections[1].name);
  }
  if (newSection !== sections[0].name) {
    //  if our section is not intro, show it.
    var $arrowUp = $('.js-arrow-up');
    $arrowUp.removeClass('hidden');
  }
  // Last page
  if (newSection === sections[sections.length - 1].name) {
    // If our section is the last one, hide the arrow down.
    var $arrowDown = $('.js-arrow-down');
    $arrowDown.addClass('hidden');
    // Set the section before the last one as previous section
    setPreviousSection(sections[sections.length - 2].name);
  }
  if (newSection !== sections[sections.length - 1].name) {
    //  if our section is not project, show it.
    var $arrowDown = $('.js-arrow-down');
    $arrowDown.removeClass('hidden');
  }
  if (newSection !== sections[sections.length - 1].name && (newSection !== sections[0].name)) {
    setNextSection(sections[getSectionByName(newSection) + 1].name);
    setPreviousSection(sections[getSectionByName(newSection) - 1].name)
  }
}

function setNextSection(section) {
  $('.js-arrow-down').attr('href', `#${section}`);
}

function setPreviousSection(section) {
  $('.js-arrow-up').attr('href', `#${section}`);
}

function getSectionByName(sectionName) {
  var number = null;
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].name === sectionName) {
      number = i;
    }
  }
  return number;
}
