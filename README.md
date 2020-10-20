# ReactJams

_ReactJams is a digital music player, like Spotify, built using_ [React](https://reactjs.org/).

## Initialization

This project was initialized using [Create React App](https://github.com/facebookincubator/create-react-app). For further information, please refer to the most recent version of this [Guide](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md) which contains information on how to perform common tasks.

### User Stories and Acceptance Criteria

<table>
  <tbody>
    <tr> <!-- Table headings -->
      <th>User Stories</th>
      <th>Acceptance Criteria</th>
    </tr>
    <tr> <!-- Row 1 -->
      <td valign="top"><i> As a listener, I want to know the name and purpose of this site so that I can decide whether I want to continue interacting with it.</i></td>
      <td>
        <ul>
          <li>When I vist the site, I see the name of the site, a slogan, and a brief list of selling points.</li>
      </td>
    </tr>
    <tr> <!-- Row 2 -->
      <td valign="top"><i>As a listener, I want to see a list of albums so that I can choose one that appeals to me.</i>
      </td>
      <td>
        <ul>
          <li>When I visit the site, I see a link to a Library page in the header.</li>
          <li>I can click on the link for the Library page.</li>
          <li>When I visit the Library page, I see a list of albums.</li>
          <li>I see a cover image, title, and artist for each album.</li>
        </ul>
      </td>
    </tr>
    <tr> <!-- Row 3 -->
      <td valign="top"><i>As a listener, I want to see basic information about the album so that I can decide whether I am interested.</i>
      </td>
      <td>
        <ul>
          <li>I immediately see an album cover image, the album's title, the artist's name, and some general release info.</li>
        </ul>
      </td>
    </tr>
    <tr> <!-- Row 4 -->
      <td valign="top"><i>As a listener, I want to see the songs on the album and be able to play/pause songs by clicking on them so that I can change tracks easily.</i>
      </td>
      <td>
        <ul>
          <li>I see a list of the album's songs.</li>
          <li>When I click on a song, it plays.</li>
          <li>When I click on a playing song, it pauses.</li>
          <li>When I hover over a song, it displays a "play" button in place of the song number.</li>
          <li>The currently playing song displays a "pause" button in place of the song number.</li>
          <li>A paused song displays a "play" button in place of the song number.
          </li>
        </ul>
      </td>
    </tr>
    <tr> <!-- Row 5 -->
      <td valign="top"><i>As a listener, I want to have a set of standard music controls so that I have complete control over my listening experience.</i>
      </td>
      <td>
        <ul>
          <li>Regardless of scroll position, I see a "player bar" with controls for: Play/Pause, Previous Track, Next Track, Seek, and Volume.</li>
          <li>The Play/Pause button shows a "play" icon if no song is currently playing.</li>
          <li>The Play/Pause button shows a "pause" button if a song is playing.</li>
          <li>The Previous Track and Next Track buttons only respond when a song is currently playing.</li>
          <li>The Previous Track button plays the previous song on the album.</li>
          <li>The Previous Track button doesn't respond if there is no previous song.</li>
          <li>The Next Track button plays the next song on the album.</li>
          <li>The Next Track button doesn't respond if there is no next song.</li>
          <li>I see a time control slider that shows the current time of the song.</li>
          <li>I can click and drag on the time control slider to change the current time.</li>
          <li>I see a volume slider that shows the player's current volume.</li>
          <li>I can click and drag on the volume slider to adjust the volume.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
