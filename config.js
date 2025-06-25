// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 8;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides * driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 10;
var followBearing = 0;
var followPitch = 10;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
  style: 'mapbox://styles/comuni-dados/ckrpy4ah754h619o14uc2avcq',
  accessToken: 'pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg',
  showMarkers: false,
  theme: 'light',
  alignment: 'left',
  use3dTerrain: true,
  image: './img/keymap.png',
  title: 'Along the shores of the Itaka Lya Mwitanzige',
  subtitle: 'A journey that connects women and rights in the northern Albertine Rift, Uganda (2019)',
  bylineDescription:'From Bugoma Forest to Bugoma Forest; a closed circuit along the shores of the Itaka Lya Mwitanzige (Lake Albert), crossing the Bugungu ancestral lands occupied by the Murchinson Fall National Park up to Pakwach and down towards the Mahagi territories, finally cruising the lake on a boat back to Hoima district. 550 km to walk along with the Women Environmental and Human Rights Defenders, the custodians of a land that the extractive industry is clearing.',
  byline: '<span>Presented by <a href="https://watetezi.org" target="blank">ENVIRONMENTAL DEFENDERS</a> and <a href="https://alessandro.vado.li" target="blank">alessandro.vado.li</a> in solidarity with the Women Environmental and Human Rights Defenders of Uganda and DR Congo</span>',
  bylineTextContinue:'V',
  footer: '<span style="width:90%;margin:auto 5%;display: inline-block;font-size: 12px;line-height: 1.3;font-weight:bold;text-align: left;"></br></br>In solidarity with the Women Environmental and Human Rights Defenders</span><span style="width:90%;margin:auto 5%;display: inline-block;font-size: 12px;line-height: 1.3;text-align: left;font-style:italic;">Woman Environmental and Human Rights Defenders are identified above all by what they do. They are characterized as such through their actions to protect environmental and land rights. They are not necessarily only members of big, well-known environmental NGOs. They may work as journalists, activists or lawyers who expose and oppose environmental destruction or land grabbing; or they are often ordinary people living in remote villages, forests or mountains, who may not even be aware that they are acting as environmental human rights defenders. They may be small-sale farmers with no land deeds; fisherwomen; teachers in remote rural communities; and in some cases even government officials. In many other cases, they are indigenous leaders or community members who defend their traditional lands against the harms of large-scale projects such as mining and dams. Many become environmental human rights defenders by accident or necessity, taking a stand against injustice or harm to their environment. Their marginalization may be amplified by increased vulnerability in rural communities, where they don’t have access to information, communication or support networks.</br></br></span><span style="width:90%;margin:auto 5%;display: inline-block;font-size: 12px;line-height: 1.3;font-weight:bold;text-align: left;">Organizations and collectives along the walk:</span><span style="width:90%;margin:auto 5%;display: inline-block;font-size: 12px;line-height: 1.3;text-align: left;">(A non-exhaustive list) <a href="https://www.afiego.org/">Africa Institute for Energy Governance -AFIEGO</a>, Buliisa Catholic Women Association - BUCAWA, <a href="https://birudo.org/">Buliisa Integrated Rural Development Organization - BIRUDO</a>, Bunyoro Albertine Petroleum Network on Environmental Conservation - ​BAPENECO, Chan Ber Ku Fur Farmers Group, <a href="https://codnetuganda.org/">Community Driven Network - CODNET</a>, <a href="https://creduganda.org/">Civic Response on Environment and Development - CRED</a>, <a href="https://www.fidh.org/">Foundation for Human Rights Initiative - FIDH</a>, <a href="https://www.fhri.or.ug/">Foundation for Human Rights Initiative - FHRI</a>, <a href="https://www.friendsofzoka.org/">Friends of Zoka</a>, <a href="https://www.globalrightsalert.org/">Global Rights Alert</a>, <a href="https://www.nape.or.ug/">National Association of Professional Environmentalists - NAPE</a>, <a href="https://hrdcoalition.ug/">National Coalition of Human Rights Defenders Uganda</a>, Navigators of Development Association - NAVODA, <a href="http://ngethamediaforpeace.org/">Ngetha Media Association for Peace</a>, Northern Coalition for Extractives and Environment - NCEE, Kaiso Women\'s Group, Kakindo Integrated Women\'s Development Agency - KAWIDA, <a href="https://www.kwatanizawomen.org/">Kwataniza Women Farmers Group</a>, <a href="https://vijanacorps.org/">Vijana Corps</a>, <a href="https://witnessradio.org/">Witness Radio</a>, <a href="https://www.womankind.org.uk/">Womankind</a></br></br></span><span style="width:90%;margin:auto 5%;display: inline-block;font-size: 12px;line-height: 1.3;font-weight:bold;text-align: left;">Bibliography</span><span style="width:90%;margin:auto 5%;display: inline-block;font-size: 12px;line-height: 1.3;text-align: left;"><ul><li>FIDH (2020), New Oil, Same Business? At a Crossroads to Avert Catastrophe in Uganda</li><li>Oxfam International (2020) Empty Promises down the line? A Human Rights Impact Assessment of the East African Crude Oil Pipeline</li><li>Oxfam International (2020) Oil in East Africa. Communities at Risk</li><li>Twinamasiko, S.; Ahimbisibwe, F. (2019) Oil-induced land compensation dispossession and women\'s experiences in Albertine Graben, Uganda</li><li>Amis de la Terre France (2019) Serious breaches of the duty of vigilance law : the case of Total in Uganda</li><li>Avocats Sans Frontières-Uganda (2019) Digging for power. Women empowerment and justice amidst extractive industry developments in the Albertine and Karamoja, Uganda</li><li>Womankind, NAPE, NAWAD (2018) Digging deep. The impact of Uganda’s land rush on women’s rights</li><li>Centre for Research on Peace and Development (2018) Land Grabbing and Oil Industry. Implications for Women’s Land Rights and Oil Industry in Uganda</li></ul></br></br></br><b><a href="https://watetezi.org" target="blank">ENVIRONMENTAL DEFENDERS</a> and <a href="https://alessandro.vado.li" target="blank">alessandro.vado.li</a>, 2021</b></br>Attribution-ShareAlike 4.0 International (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</span>',
  chapters: [
    {
      id: 'slide-0',
      alignment: '',
      hidden: false,
      title: 'The militarization of the forests #saveBugoma',
      image: './img/128176102_2096889137108594_3729205253137997307.jpg',
      description: '<span style="color:grey">The conservation of Bugoma Forest in all its integrity is paramount for the livelihood of the local farmers communities, who are generally in support of the conservation. Destruction and change in the use of the habitat will affect the climate, the water sources, the whole economy of the area, while in particular sugar cane will worsen the remaining existence of natural habitat and its wildlife with more conflicts between humans and wildlife, as well as impoverishing the soil and impoverishing the local communities.</br></br>In the Bugoma Forest, women’s defenders are replanting trees and patrolling the forest boundary for illegal loggers. Seeking out alternative, sustainable livelihoods, has replanted hectares of degraded land, once protected rainforest, with indigenous species. They offer alternative sustainable ways of living, rooted in indigenous practices. Women use community radio to raise their voices, address reported issues, organize and build consciousness about the exploitation of natural resources and the injustices women are subjected to on their bodies as part of the same system of patriarchy and capitalism. They are building collective knowledge and crafting strategies that respond to their needs.</br></br>Now the forest is militarized and access is not allowed even to local communities. Arbitrary arrests, physical attacks, seizure of personal goods, sexual arrassments, intimidations, blackmail, offensive communication and online abuses, are reported among others.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Environmental Rights, Indigenous Rights, Land Rights, Rights for Peasants</b>',
      actions: 'ACTIONS: <b>(2019 - ongoing) Campaigning, Non-violent resistance, Legal actions, Public assemblies and community dialogues, Advocacy on Environmental Rights and Land Rights, Investigative journalism, Radio shows</b>',
      levels: 'CURRENT PROTECTION LEVELS<tr><td>Legal protection</td><td><span class="dot color-1"></span><span class="dot color-1"></span></td></tr><tr><td>Physical security</td><td><span class="dot color-2"></span><span class="dot color-2"></span></td></tr><tr><td>Digital security</br>and communication</td><td><span class="dot color-3"></td></tr><tr><td>Self-care & physical</br>and spiritual well-being</td><td><span class="dot color-4"></td></tr><tr><td>Organizational strength</td><td><span class="dot color-5"></span><span class="dot color-5"></span><span class="dot color-5"></span><span class="halfdot color-5"></span></td></tr><tr><td>Networks and safe spaces</td><td><span class="dot color-6"></span><span class="dot color-6"></span><span class="halfdot color-6"></span></td></tr><tr><td>Grassroots + public support</td><td><span class="dot color-7"></td></tr><tr><td>Context awareness,</br>power dynamics knowledge</td><td><span class="dot color-8"></span><span class="dot color-8"></span><span class="dot color-8"></span></td></tr>',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-0',
      alignment: '',
      hidden: false,
      title: 'Bitter Sugar. Evicted by Hoima Sugar Ltd',
      image: './img/IMG_20180705_113806-1024x576.jpg',
      description: '<span style="color:grey">About 500 households who were evicted by Hoima Sugar Limited in 2013 are still helpless and they have nowhere to go to. Up to now, 136 victims of the 6000 people involved from Bakiga, Banyoro, and some Alur indigenous communities, have been compensated from the multinational company and large-scale agribusiness. Apparently, most of them are living in poor and vulnerable condition after they have been forcefully evicted and drove into internally displaced people’s (IDPs) camps located in Kijayo, Kikuube district. Forced evictions took place despite assertions from women that they had land ownership certificates. WEHRDs reported that homes were burned, bullets were fired and tear gas used, with reports of adults and children missing or presumed dead. IDPs in Kijayo camp have continued to conflict with Hoima Sugar Ltd workers over water, land and access roads despite reporting the matter to relevant authorities.</br></br>Many women are coming together to resist the land rush, often with the help of <a href="https://www.nape.or.ug/">NAPE</a>, <a href="https://www.nawad.co.ug/">NAWAD</a> and the eco-feminist movement. On a practical level, some of the women are trying to demarcate their land. Others have been campaigning together for customary law certificates and ensuring their names are on them as proof of land ownership.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Land Rights, Rights for Peasants, Indigenous Rights</b>',
      actions: 'ACTIONS: <b>(2015 - ongoing) Legal actions, Public assemblies and community dialogues, Advocacy on Land Rights, Investigative journalism, Radio shows</b>',
      levels: 'CURRENT PROTECTION LEVELS: <tr><td>Legal protection</td><td><span class="dot color-1"></span><span class="dot color-1"></span><span class="halfdot color-1"></span></td></tr><tr><td>Physical security</td><td><span class="halfdot color-2"></span></td></tr><tr><td>Digital security</br>and communication</td><td><span class="halfdot color-3"></td></tr><tr><td>Self-care & physical</br>and spiritual well-being</td><td><span class="halfdot color-4"></td></tr><tr><td>Organizational strength</td><td><span class="dot color-5"><span class="halfdot color-5"></td></tr><tr><td>Networks and safe spaces</td><td><span class="dot color-6"></td></tr><tr><td>Grassroots + public support</td><td><span class="halfdot color-7"></td></tr><tr><td>Context awareness,</br>power dynamics knowledge</td><td><span class="dot color-8"></span><span class="dot color-8"></span></td></tr>',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'slide-1',
      alignment: '',
      hidden: false,
      title: 'Land rush in the oil industry. The Rwamutonga oil waste treatment plant',
      image: './img/4-1.jpg',
      description: '<span style="color:grey">In 2014, 250 households were kicked out of their homes in Rwamutonga. They later learned that the eviction was linked to a proposal to lease their land to a largely foreign-owned corporation that planned to build an oil waste treatment plant in the area. The eviction was unlawful and should not have happened in the first place because at the time of the execution of the warrant of vacant possession, there was an ongoing suit to determine true ownership of the land.</br></br><a href="https://www.greenradio.ug/">Community Green Radio</a>’s reporting prompted several Ugandan civil society organizations to reach out to help the Rwamutonga villagers. One organization, <a href="https://creduganda.org/">CRED Uganda</a>, helped them file a case with the local high court. The local high court in 2015 ruled that the eviction of villagers from land claimed by one of the two Ugandan businessmen involved as intermediaries was illegal. The victory was incomplete; this case is still pending, which leaves the villagers legal claim in doubt.</br></br>WEHRDs at Community Green Radio have been essential in investigating and amplifying community voices, bringing back difficulties resulting from accessing information, reporting occurrences of sexual harrassment, and complaining about the lack of physical and digital protection measures.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Land Rights</b>',
      actions: 'ACTIONS: <b>(2014 - ongoing) Legal actions, Advocacy on Land Rights, Investigative journalism, Radio shows</b>',
      levels: 'CURRENT PROTECTION LEVELS: <tr><td>Legal protection</td><td><span class="dot color-1"></span><span class="dot color-1"></td></tr><tr><td>Physical security</td><td><span class="halfdot color-2"></span></td></tr><tr><td>Digital security</br>and communication</td><td><span class="halfdot color-3"></td></tr><tr><td>Self-care & physical</br>and spiritual well-being</td><td><span class="halfdot color-4"></td></tr><tr><td>Organizational strength</td><td><span class="dot color-5"><span class="dot color-5"><span class="halfdot color-5"></td></tr><tr><td>Networks and safe spaces</td><td><span class="dot color-6"></td></tr><tr><td>Grassroots + public support</td><td><span class="halfdot color-7"></td></tr><tr><td>Context awareness,</br>power dynamics knowledge</td><td><span class="dot color-8"></span><span class="halfdot color-8"></span></td></tr>',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-1',
      alignment: '',
      hidden: false,
      title: 'Strengthening women\'s rights in the context of extractive industries in the Hoima district',
      image: '',
      description: '<span style="color:grey">Land – its access, control and ownership – lies at the heart of power relationships within Uganda. The struggle for land is deeply intertwined with the struggle for women’s rights. Women’s access to and control over resources and economic decision making is fundamental to the achievement of their rights. Despite some progress, inequality between women and men in ownership and control of land remains stark.</br></br>WEHRDs in Hoima have particularly reported difficulties related to their activities in gathering information and prosecuting legal cases, which have resulted in surveillance, hacking of institutional information, death threats, sexual harassment, office break ins, theft of personal goods, computers, and phones, fraud, defamation, offensive communication, among others.</br></br><a href="http://ngethamediaforpeace.org/">Ngetha Media Association for Peace</a> and <a href="https://www.watetezi.org/">Environmental Defenders</a> conducted trainings in Hoima on protection and physical and digital protection for WEHRDs, identifying existing gaps and contributing to the security plans of small and medium-sized women-led organizations operating in the district.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Women Rights, Environmental Rights, Indigenous Rights, Land Rights, Rights for Peasants, Human Rights</b>',
      actions: 'ACTIONS: <b>(2019 - ongoing) Trainings on protection for women-led organizations, Trainings on Physical and Digital Security, Advocacy on Digital Rights, Public assemblies and community dialogues, Radio shows</b>',
      levels: '',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-2',
      alignment: '',
      hidden: false,
      title: 'Threats comes from those who should protect you. Breaking power structures in Masindi',
      image: '',
      description: '<span style="color:grey">Intimidation from the politicians, police and the government officials (like in the LC 5). Torture and arrest by the security apparatus. Threats from National Forest Authority officials. Denial of information by the politicians. Confiscation of gadgets. Suspension from work. Manipulation by bosses and elites. Restriction on political participation and on the right to meet in public assemblies through threats and physical attacks. These are among others the risks identified by WEHRDs in the inter-organizational dialogues and tranings organized by <a href="http://ngethamediaforpeace.org/">Ngetha Media Association for Peace</a> in Masindi.</br></br>Many of these risks stem from gender norms and cultural practices that limit women and girl’s access to property, political participation, and economic or educational attainment. Despite significant advances in women’s political participation, lobbying and advocacy for marginalized groups and also seeking justice in formal courts is lacking: courts are far from locals, for example the Masindi high court\'s facilities and human resources are few, so access to justice for most local communities is difficult and amounts to denial.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Women Rights, Political Rights, Human Rights, Environmental Rights</b>',
      actions: 'ACTIONS: <b>Legal training, Advocacy on Women Rights, Gender equality in law, and Land Rights, Promotion of Women\'s political participation, Public assemblies and community dialogues</b>',
      levels: '',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-3',
      alignment: '',
      hidden: false,
      title: 'Public cinema, intergenerational dialogue and involvement with institutions. Engaging the communities in the Biiso sub-county.',
      image: './img/D_C7AmHWkAIuNRF.jpg',
      description: '<span style="color:grey"><a href="http://ngethamediaforpeace.org/">Ngetha Media Association for Peace</a> organized a mobile public cinema through Buliisa district, screening films to raise awareness about nature conservation. This is part of the actions of dialogue with communities, with focus on intergenerational dialogue.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Environmental Rights, Indigenous Rights</b>',
      actions: 'ACTIONS: <b>(2019 - 2020) Public Cinema, Public assemblies and community dialogues, Advocacy on Environmental Rigths and Indigenous Rights</b>',
      levels: '',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'slide-4',
      alignment: '',
      hidden: false,
      title: 'The TILENGA project clearing land and rights',
      image: './img/Dr0D3hqWoAIyI4a.jpg',
      description: 'Under the Tilenga project, Total is planning on drilling over 400 wells using 34 drilling pads. Ten of these drilling pads are located in the country\'s oldest protected natural area: the Murchison Falls National Park. The project will also require infrastructure between the National Park and Buliisa District: an oil processing plant (Central Processing Facility - CPF) and a 180-km-long (approximately) network of pipelines connecting the various wells with the CPF and a water extraction system (water will be extracted from Lake Albert). The oil will be transported from the CPF to Kabaale, located in the neighbouring Hoima District, where the Ugandan government plans to build a refinery – the starting point for the mega East African Crude Oil Pipeline (EACOP).</br></br>In June 2019, six organisations – <a href="https://www.amisdelaterre.org/">Friends of the Earth France</a>, <a href="https://survie.org/">Survie (France)</a>, <a href="https://www.afiego.org/">AFIEGO</a>, <a href="https://creduganda.org/">CRED</a>, <a href="https://www.nape.or.ug/">NAPE/Friends of the Earth Uganda</a> and NAVODA (Uganda)– issued a formal notice to French transnational corporation Total, informing it that its mega oil project in Uganda and Tanzania failed to comply with the company\'s legal obligations to prevent human rights violations and environmental harm.</br></br>Given a serious lack of information, Project-Affected Persons - PAPs have not been able to fully exercise their Free, Prior and Informed Consent. PAPs reveal feelings of despair, due to the suffering from restrictions on the use of farmland, as well as fear, due to a perceived connivance between Total and its subcontractors and the security forces (police and army). It is particularly women who are affected, acknowledged their central role in crop farming and the fact that incomes from cash crops reinforce food security for families, advance children’s education, and support community healthcare.<hr style="width:50%;margin: 8px 0 0 0;">',
      field: 'FIELD: <b>Indigenous Rights, Land Rights, Women Rights, Rights for Peasants</b>',
      actions: 'ACTIONS:<b> (2013 - ongoing) Legal actions, Public assemblies and community dialogues, Legal Trainings, Advocacy on Land Rights, Radio Shows, Public Cinema, Investigative Journalism</b>',
      levels: 'CURRENT PROTECTION LEVELS: <tr><td>Legal protection</td><td><span class="dot color-1"></span><span class="dot color-1"></span><span class="dot color-1"></span></td></tr><tr><td>Physical security</td><td><span class="dot color-2"></span><span class="halfdot color-2"></span></td></tr><tr><td>Digital security</br>and communication</td><td><span class="halfdot color-3"></td></tr><tr><td>Self-care & physical</br>and spiritual well-being</td><td><span class="dot color-4"></td></tr><tr><td>Organizational strength</td><td><span class="dot color-5"></span><span class="dot color-5"></span><span class="dot color-5"></span></td></tr><tr><td>Networks and safe spaces</td><td><span class="dot color-6"></span><span class="dot color-6"></span><span class="dot color-6"></span><span class="dot color-6"></span></td></tr><tr><td>Grassroots + public support</td><td><span class="dot color-7"></td></tr><tr><td>Context awareness,</br>power dynamics knowledge</td><td><span class="dot color-8"></span><span class="dot color-8"></span><span class="halfdot color-8"></span></td></tr>',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-4',
      alignment: '',
      hidden: false,
      title: 'Barriers to fair compensation in the oil fields development project in the Ngwedo sub-county. Cultural norms against women and conflicts over land evaluation ',
      image: '',
      description: '<span style="color:grey">Cultural prohibitions against women\’s ownership of land are often more powerful than statutory laws that allow women to own land. These cultural norms may determine which rights to land a woman can exercise freely. Discrimination against women in access to land and its ownership is aggravated during compensation and relocation processes. This is particularly true for single women and widows, who cannot rely on their husbands to preserve their access to land.</br></br>It\'s not just limitations on women\'s land rights; according to local authorities, despite the additional efforts made to create joint bank accounts where both spouses could equally access compensation money, there remain abuses and sexual and gender-based violence (SGVB) by men who force women to take the money out of the bank and give it to them.</br></br>The weaknesses of women\’s land rights highlight the inadequacy of the legal framework and are aggravated in the context of land rush generated by the oil development projects, where the economic actors involved have failed to adopt adequate protective measures. This is why organizations such as <a href="https://www.fidh.org/">International Federation for Human Rights- FIDH</a>, <a href="https://www.fhri.or.ug/">FHRI</a>, <a href="https://www.womankind.org.uk/">Womankind</a>, <a href="https://www.nape.or.ug/">Nape</a> and <a href="https://www.nawad.co.ug/">NAWAD</a> report on these cultural, social and legal mechanisms and in collaboration with organizations such as <a href="http://ngethamediaforpeace.org/">Ngetha Media Association for Peace</a> organize community dialogues and legal trainings promoting change and enhancement of women\'s land rights.<hr style="width:50%;margin: 8px 0 0 0;"></br>Compensation standards used by oil companies are unclear, developed in foreign contexts and under foreign agronomic rules, and are fraudulently used to lower the rate of compensation. Places reserved for spiritual functions and part of the cultural heritage, such as Clan Cultural Sites and family shrines, are excluded from compensation. Moreover, the immediate land clearing after the signing of the Cut Off Dates Forms, without timely compensation, throws the households into poverty, as they are reliant on the land and forest resources.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Women Rights, Land Rights, Peasant Rights</b>',
      actions: 'ACTIONS: <b>Community dialogues, Legal Trainings, Radio Shows, Public Cinema, Investigative Journalism</b>',
      levels: '',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-5',
      alignment: '',
      hidden: false,
      title: 'Guardians during the Covid-19 pandemic. Constraining the increase in environmental crimes, Illegal Wildlife Trade and illegal industrial logging',
      image: './img/P1020882.jpg',
      description: '<span style="color:grey">There is a correlation between the economic situation of households living in protected areas and wildlife abundant areas of Pakwach, Masindi and Nwoya districts, and the rate of occurrence for crimes against wildlife. With restrictive measures to prevent the spread of the Covid-19 pandemic (lockdown), households have struggled for food, as due to a militarization of villages and increased police violence they have been unable to reach their gardens, the forest or neighborhood in search of food; at the same time the cost of food in the markets has increased so much that it has led communities to prey on wildlife (including species considered endangered by the IUCN Red List).</br></br>Murchinson Fall National Park and adjacent districts have also seen an increase in Illegal Wildlife Trade and poaching; pangolins, hippos, and elephants are among the most common victims. Illegal logging of forested areas to produce charcoal ("the Black Gold") to sell to neighboring regions has not stopped either. Despite the efforts of the <a href="https://www.ugandawildlife.org/">Uganda Wildlife Authority</a>, it is difficult to control such large territories with few resources available.</br></br><a href="https://www.watetezi.org/">Environmental Defenders</a>\' WEHRDs work with authorities by proposing actions aimed at habitat restoration and community-based conservation, promoting environmental education and the use of clean energy for cooking. These actions catch the attention of powerful businessmen and political leaders at the district level and below, who consider themselves threatened by this kind of activity as being in opposition to the development model they support. This results in physical and digital threats, blockage of community initiatives, arbitrary arrests, and attacks against property, among others.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Environmental Rights, Indigenous Rights, Ecological Rights</b>',
      actions: 'ACTIONS:<b>Habitat conservation and restoration, Seed banking and seedling distribution, Endangered species protection and campaigning, Advocacy on Environmental Rights, Environmental Education, Radio Shows, Public Cinema, Investigative Journalism</b>',
      levels: '',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-6',
      alignment: '',
      hidden: false,
      title: 'Waiting for a boat to cross the lake. Sexual and Gender-Based Violence in the Internally Displaced Peoples Camps.',
      image: './img/signal-2021-03-05-175414_008.jpeg',
      description: '<span style="color:grey">Sexual and Gender-Based Violence (SGBV) risks in Mahagi territories (Ituri province, DR Congo) are high, including sexual exploitation, and survival sex. Many of the risks in this territory are localized among the indigenous communities threatened by the armed militias that control the region and in the Internally Displaced Peoples (IDPs) camps. Recently reported cases of Sexual Exploitation and Abuse (SEA) involving members of the medical staff handling IDPs camps in Mahagi territories have been reported. But women are reticent to report incidents due to stigma and exclusion, thus incidents are underreported. Despite referrals to medical facilities, legal follow-up is quasi non-existent, perpetuating impunity. Displaced girls and women in the IDPs camps experience disproportionately high risks and are particularly vulnerable to SEA and survival sex. As many IDPs live in squalid conditions, their sexual and reproductive health and hygiene needs are generally unmet. Campaigns on PSEA do not take into account that people in the camps are only transiting, in fact most are trying to reach the shores of Lake Albert and cross the lake to get to Uganda. It is considered that by 2020 in Ituri province there were about 220,000 IDPs and since the beginning of the 2021 many are heading north into Mahagi territories leaving Irumu and Djugu territories, potentially increasing SGBV risks within existing and informal camps.</br></br>Immediate needs to be met through greater cohesion among international organizations managing humanitarian support, to be implemented with WEHRDs, communities and beneficiaries, include: protection from violence and conflict for women and children; child protection; response to SGBV; shelter support; menstrual hygiene kits; water, sanitation and hygiene needs; access to education. Meanwhile, WEHRDs continue their reporting activities within the camps in participating to the SGBV campliants and feedback mechanism, supporting protection initiatives for women and children, developing awareness-raising materials, and using community engagement social tools.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Women Rights, Sexual and Reproductive Health Rights, Children Rights</b>',
      actions: 'ACTIONS: <b>Protection from sexual exploitation and abuse policy, Humanitarian Support</b>',
      levels: 'CURRENT PROTECTION LEVELS: <tr><td>Legal protection</td><td><span class="dot color-1"></span></span></td></tr><tr><td>Physical security</td><td><span class="halfdot color-2"></span></td></tr><tr><td>Digital security</br>and communication</td><td><span class="halfdot color-3"></td></tr><tr><td>Self-care & physical</br>and spiritual well-being</td><td><span class="halfdot color-4"></td></tr><tr><td>Organizational strength</td><td><span class="halfdot color-5"></span></td></tr><tr><td>Networks and safe spaces</td><td><span class="dot color-6"></span></td></tr><tr><td>Grassroots + public support</td><td><span class="dot color-7"></span></td></tr><tr><td>Context awareness,</br>power dynamics knowledge</td><td><span class="halfdot color-8"></span></td></tr>',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'drive-slide-7',
      alignment: '',
      hidden: false,
      title: 'The repressive environment of the East African Crude Oil Pipeline - EACOP project',
      image: '',
      description: '<span style="color:grey">At a distance of 1,440 kilometers (900 miles) and at an estimated cost of $3.5 billion, the EACOP would be one of the largest infrastructure projects in East Africa and the longest heated oil pipeline in the world. The pipeline would transport oil from a pumping station near Hoima, Uganda, to a storage terminal near the city of Tanga, on the northeastern coast of Tanzania. The route would run beside Lake Victoria, Africa\’s largest lake, and pass through diverse ecosystems and human settlements.</br></br>Non-compliance with the Free, Prior and Informed Consent of local communities opposed to the project, evictions, unfair or missed compensation on land acquisitions, human rights violations and environmental crimes are among the risks that have already been observed with the Tilenga project.<br></br>Regulation to protect local communities in the oil and mining areas is limited, and militarisation has reportedly increased to secure project development sites. Many environmental and human rights defenders are unable to disclose their locations for fear of reprisal, creating a “chilling effect” that discourages defenders from speaking up for the communities they represent in national and international forums. The pending creation of specialized oil and gas police force in Uganda will likely only further complicate this repressive environment.<hr style="width:50%;margin: 8px 0 0 0;"></span>',
      field: 'FIELD: <b>Environmental Rights, Indigenous Rights, Peasant Rights, Land Rights</b>',
      actions: 'ACTIONS: <b>(2019 - ongoing) Legal actions, Public assemblies and community dialogues, Campaigning, Radio Shows, Investigative Journalism</b>',
      levels: 'CURRENT PROTECTION LEVELS: <tr><td>Legal protection</td><td><span class="dot color-1"></span><span class="dot color-1"></span><span class="dot color-1"></span></td></tr><tr><td>Physical security</td><td><span class="dot color-2"></span></td></tr><tr><td>Digital security</br>and communication</td><td><span class="dot color-3"></td></tr><tr><td>Self-care & physical</br>and spiritual well-being</td><td><span class="dot color-4"></td></tr><tr><td>Organizational strength</td><td><span class="dot color-5"></span><span class="dot color-5"></span><span class="halfdot color-5"></span></td></tr><tr><td>Networks and safe spaces</td><td><span class="dot color-6"></span><span class="dot color-6"></span><span class="halfdot color-6"></span></td></tr><tr><td>Grassroots + public support</td><td><span class="dot color-7"></span></td></tr><tr><td>Context awareness,</br>power dynamics knowledge</td><td><span class="dot color-8"></span><span class="dot color-8"></span></td></tr>',
      location: {},
      mapAnimation: false,
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    }
    ]
};
