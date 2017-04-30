// List the sections here
const sections = [
  { name: 'about' },
  { name: 'work' },
  { name: 'project' }
];

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

function navigate() {
  const $window = $(window),
    $sections = $('.js-section'),
    header = $('header'),
    header_height = header.outerHeight();

  const cur_pos = $(this).scrollTop();

  currentScroll = scroll;

  $sections.each(function() {
    const top = $(this).offset().top - header_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      const section = $(this).data('name');
      // If the section is a new section
      if (section !== currentSection) {
        // Change currentSection
        currentSection = section;
        handleNewSection(currentSection);
      }
      // do nothing instead (performance)
    }
  });
}

// When a new section is selected, do whatever is necessary
function handleNewSection(newSection) {
  // Update section name at current section text.
  $('.js-current-section').html(newSection);
  // First page
  if (newSection === sections[0].name) {
    // If our section is intro, hide the arrow up.
    $('.js-arrow-up').addClass('hidden');
    // Set second section as next section
    setNextSection(sections[1].name);
  }
  if (newSection !== sections[0].name) {
    //  if our section is not intro, show it.
    $('.js-arrow-up').removeClass('hidden');
  }
  // Last page
  if (newSection === sections[sections.length - 1].name) {
    // If our section is the last one, hide the arrow down.
    $('.js-arrow-down').addClass('hidden');
    // Set the section before the last one as previous section
    setPreviousSection(sections[sections.length - 2].name);
  }
  if (newSection !== sections[sections.length - 1].name) {
    //  if our section is not project, show it.
    $('.js-arrow-down').removeClass('hidden');
  }
  if (newSection !== sections[sections.length - 1].name && (newSection !== sections[0].name)) {
    setPreviousSection(sections[getSectionByName(newSection) - 1].name);
    setNextSection(sections[getSectionByName(newSection) + 1].name);
  }
}

function setPreviousSection(section) {
  $('.js-arrow-up').attr('href', `#${section}`);
}

function setNextSection(section) {
  $('.js-arrow-down').attr('href', `#${section}`);
}

function getSectionByName(sectionName) {
  let number = null;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].name === sectionName) {
      number = i;
    }
  }
  return number;
}
