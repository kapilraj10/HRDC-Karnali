// Data storage
let patients = JSON.parse(localStorage.getItem('hrdc_patients')) || [];
let staff = JSON.parse(localStorage.getItem('hrdc_staff')) || [];
let finance = JSON.parse(localStorage.getItem('hrdc_finance')) || [];
let patientCauses = [];

// Location data
const locationData = {
  "Province 1": {
   "Bhojpur": [
      "Bhojpur Municipality",
      "Shadananda Municipality",
      "Arun Rural Municipality",
      "Pauwadungma Rural Municipality",
      "Salpasilichho Rural Municipality",
      "Tyamke Maiyum Rural Municipality",
      "Aamchowk Rural Municipality",
      "Ramprasad Rai Rural Municipality",
      "Hatuwagadhi Rural Municipality"
    ],
    "Dhankuta": [
      "Dhankuta Municipality",
      "Pakhribas Municipality",
      "Mahalaxmi Municipality",
      "Sangurigadhi Rural Municipality",
      "Chhathar Jorpati Rural Municipality",
      "Shahidbhumi Rural Municipality",
      "Chaubise Rural Municipality"
    ],
    "Ilam": [
      "Ilam Municipality",
      "Deumai Municipality",
      "Mai Municipality",
      "Suryodaya Municipality",
      "Phakphokthum Rural Municipality",
      "Chulachuli Rural Municipality",
      "Maijogmai Rural Municipality",
      "Rong Rural Municipality",
      "Mangsebung Rural Municipality",
      "Sandakpur Rural Municipality"
    ],
    "Jhapa": [
      "Bhadrapur Municipality",
      "Birtamod Municipality",
      "Damak Municipality",
      "Kankai Municipality",
      "Mechinagar Municipality",
      "Arjundhara Municipality",
      "Shivasatakshi Municipality",
      "Gauradaha Municipality",
      "Buddhashanti Rural Municipality",
      "Kamal Rural Municipality",
      "Gauriganj Rural Municipality",
      "Barhadashi Rural Municipality",
      "Jhapa Rural Municipality",
      "Kachankawal Rural Municipality",
      "Haldibari Rural Municipality"
    ],
    "Khotang": [
      "Diktel Rupakot Majhuwagadhi Municipality",
      "Halesi Tuwachung Municipality",
      "Jantedhunga Rural Municipality",
      "Lamidanda Rural Municipality",
      "Khotehang Rural Municipality",
      "Diprung Chuichumma Rural Municipality",
      "Aiselukharka Rural Municipality",
      "Kepilasgadhi Rural Municipality",
      "Rawabesi Rural Municipality",
      "Sakela Rural Municipality",
      "Barahapokhari Rural Municipality"
    ],
    "Morang": [
      "Biratnagar Metropolitan City",
      "Belbari Municipality",
      "Letang Municipality",
      "Pathari-Shanishchare Municipality",
      "Rangeli Municipality",
      "Ratuwamai Municipality",
      "Sunawarshi Municipality",
      "Urlabari Municipality",
      "Budhiganga Rural Municipality",
      "Dhanpalthan Rural Municipality",
      "Gramthan Rural Municipality",
      "Jahada Rural Municipality",
      "Kanepokhari Rural Municipality",
      "Katahari Rural Municipality",
      "Kerabari Rural Municipality",
      "Miklajung Rural Municipality"
    ],
    "Okhaldhunga": [
      "Siddhicharan Municipality",
      "Khijidemba Rural Municipality",
      "Champadevi Rural Municipality",
      "Chisankhugadhi Rural Municipality",
      "Likhu Rural Municipality",
      "Manebhanjyang Rural Municipality",
      "Molung Rural Municipality",
      "Sunkoshi Rural Municipality"
    ],
    "Panchthar": [
      "Phidim Municipality",
      "Hilihang Rural Municipality",
      "Kummayak Rural Municipality",
      "Miklajung Rural Municipality",
      "Phalgunanda Rural Municipality",
      "Tumbewa Rural Municipality",
      "Yangwarak Rural Municipality",
      "Falelung Rural Municipality"
    ],
    "Sankhuwasabha": [
      "Khandbari Municipality",
      "Dharmadevi Municipality",
      "Chainpur Municipality",
      "Madi Municipality",
      "Panchkhapan Municipality",
      "Bhotkhola Rural Municipality",
      "Chichila Rural Municipality",
      "Makalu Rural Municipality",
      "Silichong Rural Municipality",
      "Sabhapokhari Rural Municipality"
    ],
    "Solukhumbu": [
      "Solu Dudhkunda Municipality",
      "Dudhkoshi Rural Municipality",
      "Khumbu Pasanglhamu Rural Municipality",
      "Likhupike Rural Municipality",
      "Mahakulung Rural Municipality",
      "Nechasalyan Rural Municipality",
      "Sotang Rural Municipality"
    ],
    "Sunsari": [
      "Inaruwa Municipality",
      "Itahari Sub-Metropolitan City",
      "Dharan Sub-Metropolitan City",
      "Duhabi Municipality",
      "Ramdhuni Municipality",
      "Barah Municipality",
      "Koshi Rural Municipality",
      "Bhokraha Narsingh Rural Municipality",
      "Harinagar Rural Municipality",
      "Dewanganj Rural Municipality"
    ],
    "Taplejung": [
      "Phungling Municipality",
      "Aathrai Tribeni Rural Municipality",
      "Meringden Rural Municipality",
      "Maiwakhola Rural Municipality",
      "Phaktanglung Rural Municipality",
      "Sidingwa Rural Municipality",
      "Sirijangha Rural Municipality",
      "Yangwarak Rural Municipality"
    ],
    "Tehrathum": [
      "Myanglung Municipality",
      "Laligurans Municipality",
      "Aathrai Rural Municipality",
      "Chhathar Rural Municipality",
      "Menchhayayem Rural Municipality",
      "Phedap Rural Municipality"
    ],
    "Udayapur": [
      "Triyuga Municipality",
      "Katari Municipality",
      "Chaudandigadhi Municipality",
      "Belaka Municipality",
      "Rautamai Rural Municipality",
      "Tapli Rural Municipality",
      "Udayapurgadhi Rural Municipality",
      "Limchungbung Rural Municipality"
    ]
  },
  "Province 2": {
    "Saptari": [
        "Rajbiraj Municipality",
        "Bodebarsain Municipality",
        "Dakneshwori Municipality",
        "Hanumannagar Kankalini Municipality",
        "Kanchanrup Municipality",
        "Khadak Municipality",
        "Sambhunath Municipality",
        "Surunga Municipality",
        "Agnisair Krishnasavaran Rural Municipality",
        "Balan-Bihul Rural Municipality",
        "Bishnupur Rural Municipality",
        "Chhinnamasta Rural Municipality",
        "Mahadeva Rural Municipality",
        "Rupani Rural Municipality",
        "Tilathi Koiladi Rural Municipality"
      ],
      "Siraha": [
        "Siraha Municipality",
        "Lahan Municipality",
        "Dhangadhimai Municipality",
        "Golbazar Municipality",
        "Mirchaiya Municipality",
        "Kalyanpur Municipality",
        "Karjanha Municipality",
        "Bhagawanpur Rural Municipality",
        "Aurahi Rural Municipality",
        "Arnama Rural Municipality",
        "Bariyarpatti Rural Municipality",
        "Bishnupur Rural Municipality",
        "Lakshmipur Patari Rural Municipality",
        "Naraha Rural Municipality",
        "Sakhuwanankarkatti Rural Municipality",
        "Sukhipur Municipality"
      ],
      "Dhanusha": [
        "Janakpur Sub-Metropolitan City",
        "Chhireshwornath Municipality",
        "Dhanusadham Municipality",
        "Ganeshman Charnath Municipality",
        "Kamala Municipality",
        "Mithila Municipality",
        "Mithila Bihari Municipality",
        "Nagarain Municipality",
        "Sabaila Municipality",
        "Shahidnagar Municipality",
        "Bideha Municipality",
        "Aaurahi Rural Municipality",
        "Bateshwor Rural Municipality",
        "Dhanauji Rural Municipality",
        "Janaknandini Rural Municipality",
        "Lakshminiya Rural Municipality",
        "Mukhiyapatti Musaharniya Rural Municipality",
        "Mukhiyapatti Musaharniya Rural Municipality"
      ],
      "Mahottari": [
        "Jaleshwar Municipality",
        "Bardibas Municipality",
        "Gaushala Municipality",
        "Loharpatti Municipality",
        "Manara Shiswa Municipality",
        "Matihani Municipality",
        "Ramgopalpur Municipality",
        "Balawa Municipality",
        "Aurahi Municipality",
        "Ekdanra Rural Municipality",
        "Mahottari Rural Municipality",
        "Pipra Rural Municipality",
        "Samsi Rural Municipality",
        "Sonama Rural Municipality"
      ],
      "Sarlahi": [
        "Malangwa Municipality",
        "Haripur Municipality",
        "Haripurwa Municipality",
        "Ishworpur Municipality",
        "Kabilasi Municipality",
        "Lalbandi Municipality",
        "Barahathwa Municipality",
        "Balara Municipality",
        "Bagmati Municipality",
        "Godaita Municipality",
        "Chandranagar Rural Municipality",
        "Dhankaul Rural Municipality",
        "Kaudena Rural Municipality",
        "Parsa Rural Municipality",
        "Ramnagar Rural Municipality",
        "Bishnu Rural Municipality",
        "Brahmapuri Rural Municipality",
        "Basbariya Rural Municipality"
      ],
      "Rautahat": [
        "Gaur Municipality",
        "Chandrapur Municipality",
        "Garuda Municipality",
        "Gadhimai Municipality",
        "Ishanath Municipality",
        "Katahariya Municipality",
        "Madhav Narayan Municipality",
        "Maulapur Municipality",
        "Paroha Municipality",
        "Rajpur Municipality",
        "Rajdevi Municipality",
        "Baudhimai Municipality",
        "Brindaban Municipality",
        "Dewahi Gonahi Municipality",
        "Durga Bhagwati Rural Municipality",
        "Gujara Municipality",
        "Phatuwa Bijayapur Municipality",
        "Yamunamai Rural Municipality"
      ],
      "Bara": [
        "Kalaiya Sub-Metropolitan City",
        "Jeetpur Simara Sub-Metropolitan City",
        "Kolhabi Municipality",
        "Nijgadh Municipality",
        "Pacharauta Municipality",
        "Parwanipur Rural Municipality",
        "Prasauni Rural Municipality",
        "Simraungadh Municipality",
        "Suwarna Rural Municipality",
        "Adarsh Kotwal Rural Municipality",
        "Bishrampur Rural Municipality",
        "Karaiyamai Rural Municipality",
        "Devtal Rural Municipality",
        "Feta Rural Municipality",
        "Mahagadhimai Municipality",
        "Pheta Rural Municipality"
      ],
      "Parsa": [
        "Birgunj Metropolitan City",
        "Bahudarmai Municipality",
        "Bindabasini Rural Municipality",
        "Chhipaharmai Rural Municipality",
        "Dhobini Rural Municipality",
        "Jagarnathpur Rural Municipality",
        "Jira Bhawani Rural Municipality",
        "Kalikamai Rural Municipality",
        "Pakahamainpur Rural Municipality",
        "Parsa Rural Municipality",
        "Sakhuwa Prasauni Rural Municipality",
        "Thori Rural Municipality"
      ]
  },
  "Province 3": {
    "Kathmandu": [
        "Kathmandu Metropolitan City",
        "Bhaktapur Municipality",
        "Lalitpur Metropolitan City",
        "Kirtipur Municipality",
        "Madhyapur Thimi Municipality",
        "Godavari Municipality",
        "Dakshinkali Municipality",
        "Chandragiri Municipality",
        "Sundarijal Municipality",
        "Kageshwori Manohara Municipality",
        "Gokarneshwar Municipality",
        "Buddhanilkantha Municipality",
        "Shankharapur Municipality",
        "Nagarkot Rural Municipality"
      ],
      "Bhaktapur": [
        "Bhaktapur Municipality",
        "Suryabinayak Municipality",
        "Changunarayan Municipality",
        "Madhyapur Thimi Municipality",
        "Duwakot Rural Municipality"
      ],
      "Lalitpur": [
        "Lalitpur Metropolitan City",
        "Godavari Municipality",
        "Mahalaxmi Municipality",
        "Lagankhel Municipality",
        "Bungamati Municipality",
        "Patan Municipality",
        "Chhetrapati Municipality"
      ],
      "Chitwan": [
        "Bharatpur Metropolitan City",
        "Ratnanagar Municipality",
        "Madhyapur Thimi Municipality",
        "Khairahani Municipality",
        "Patan Municipality",
        "Makawanpur Rural Municipality",
        "Shree Harsha Municipality",
        "Bhedetar Municipality"
      ],
      "Makwanpur": [
        "Hetauda Municipality",
        "Bharatpur Municipality",
        "Makawanpur Rural Municipality",
        "Bhimphedi Municipality",
        "Patan Municipality",
        "Ratomate Municipality",
        "Fakhraghat Municipality"
      ],
      "Nuwakot": [
        "Bidur Municipality",
        "Tadi Municipality",
        "Kishumale Municipality",
        "Galchhi Municipality",
        "Dhading Municipality"
      ],
      "Rasuwa": [
        "Dhulikhel Municipality",
        "Nuwakot Municipality",
        "Pokhara Municipality",
        "Trishuli Municipality"
      ],
      "Sindhupalchok": [
        "Chautara Municipality",
        "Sindhupalchok Rural Municipality",
        "Gosaikunda Municipality",
        "Bidhyananda Municipality",
        "Nepal Rural Municipality",
        "Shree Hari Rural Municipality"
      ],
      "Dolakha": [
        "Charikot Municipality",
        "Baiteshwor Municipality",
        "Dolakha Rural Municipality",
        "Jiri Municipality",
        "Kavre Rural Municipality",
        "Namuna Municipalities"
      ]
  },
  "Province 4": {
   "Baglung": [
    "Baglung Municipality",
    "Tibetan Rural Municipality",
    "Galkot Rural Municipality",
    "Jaimini Rural Municipality",
    "Dhorpatan Municipality",
    "Rukhu Rural Municipality"
  ],
  "Gorkha": [
    "Gorkha Municipality",
    "Aarughat Rural Municipality",
    "Palungtar Municipality",
    "Chhepekhola Rural Municipality",
    "Sotang Rural Municipality",
    "Madi Rural Municipality"
  ],
  "Kaski": [
    "Pokhara Metropolitan City",
    "Madi Municipality",
    "Lekhnath Municipality",
    "Phedi Rural Municipality",
    "Phalewas Municipality",
    "Annapurna Rural Municipality"
  ],
  "Lamjung": [
    "Besisahar Municipality",
    "Sundarbazar Municipality",
    "Rural Municipality",
    "Bhanu Municipality",
    "Banjhakateri Municipality"
  ],
  "Manang": [
    "Chame Municipality",
    "Khashi Rural Municipality",
    "Narpani Municipality"
  ],
  "Mustang": [
    "Jomsom Municipality",
    "Thini Rural Municipality",
    "Muktinath Rural Municipality",
    "Ghasa Municipality"
  ],
  "Myagdi": [
    "Beni Municipality",
    "Raghuganga Rural Municipality",
    "Maya Rural Municipality",
    "Dhawalagiri Rural Municipality",
    "Punevha Rural Municipality"
  ],
  "Nawalpur": [
    "Kawasoti Municipality",
    "Gaindakot Municipality",
    "Hupsekot Rural Municipality",
    "Chandranigahapur Rural Municipality"
  ],
  "Parbat": [
    "Kusma Municipality",
    "Bhimad Municipality",
    "Madhav Municipality",
    "Siddhartha Municipality"
  ],
  "Syangja": [
    "Syangja Municipality",
    "Pokhara Sub Metropolitan",
    "Parbat Rural Municipality"
  ],
  "Tanahun": [
    "Damauli Municipality",
    "Byas Municipality",
    "Bhanu Municipality"
  ]
  },
  "Province 5": {
        "Arghakhanchi": [
          "Sandhikharka Municipality",
          "Pyuthan Municipality",
          "Bangesal Municipality",
          "Chidikhor Rural Municipality",
          "Kalyan Rural Municipality",
          "Patan Rural Municipality"
        ],
        "Banke": [
          "Nepalgunj Sub Metropolitan City",
          "Kohalpur Municipality",
          "Khajura Rural Municipality",
          "Baijanath Rural Municipality",
          "Rapti Sonari Rural Municipality"
        ],
        "Bardiya": [
          "Gulariya Municipality",
          "Thakurbaba Municipality",
          "Rajapur Municipality",
          "Geruwa Rural Municipality",
          "Bishrampur Rural Municipality"
        ],
        "Dang": [
          "Tulsipur Sub Metropolitan City",
          "Ghorahi Sub Metropolitan City",
          "Lumbini Rural Municipality",
          "Shree Harishchandra Rural Municipality",
          "Banke Rural Municipality"
        ],
        "Kapilvastu": [
          "Taulihawa Municipality",
          "Krishnanagar Municipality",
          "Yashodhara Rural Municipality",
          "Buddhabhumi Municipality",
          "Banganga Municipality"
        ],
        "Nawalparasi (East)": [
          "Parasi Municipality",
          "Susta Rural Municipality",
          "Sunwal Municipality",
          "Bardaghat Municipality",
          "Madhyabindu Municipality"
        ],
        "Rupandehi": [
          "Lumbini Sanskritik Municipality",
          "Butwal Sub Metropolitan City",
          "Siddhartha Nagar Municipality",
          "Devdaha Municipality",
          "Tilottama Municipality",
          "Sainamaina Municipality"
        ],
        "Palpa": [
          "Tansen Municipality",
          "Rampur Municipality",
          "Purbakhola Rural Municipality",
          "Nijgadh Rural Municipality"
        ]
      },
  "Province 6": {
   "Dailekh": [
      "Narayan Municipality",
      "Aathabis Municipality",
      "Chamunda Bindrasaini Municipality",
      "Bhairabi Rural Municipality",
      "Dungeshwar Rural Municipality",
      "Gurans Rural Municipality",
      "Mahabu Rural Municipality",
      "Naumule Rural Municipality",
      "Thantikandh Rural Municipality",
      "Bhagawatimai Rural Municipality"
    ],
    "Dolpa": [
      "Thuli Bheri Municipality",
      "Tripurasundari Municipality",
      "Mudkechula Rural Municipality",
      "Kaike Rural Municipality",
      "Dolpo Buddha Rural Municipality",
      "Shey Phoksundo Rural Municipality",
      "Chharka Tangsong Rural Municipality",
      "Jagadulla Rural Municipality"
    ],
    "Humla": [
      "Simkot Rural Municipality",
      "Namkha Rural Municipality",
      "Kharpunath Rural Municipality",
      "Sarkegad Rural Municipality",
      "Chankheli Rural Municipality",
      "Tanjakot Rural Municipality",
      "Adanchuli Rural Municipality"
    ],
    "Jajarkot": [
      "Bheri Municipality",
      "Chhedagad Municipality",
      "Nalagad Municipality",
      "Kuse Rural Municipality",
      "Barekot Rural Municipality",
      "Junichande Rural Municipality",
      "Shiwalaya Rural Municipality"
    ],
    "Jumla": [
      "Chandannath Municipality",
      "Kankasundari Rural Municipality",
      "Sinja Rural Municipality",
      "Hima Rural Municipality",
      "Tila Rural Municipality",
      "Guthichaur Rural Municipality",
      "Tatopani Rural Municipality",
      "Patrasi Rural Municipality"
    ],
    "Kalikot": [
      "Khandachakra Municipality",
      "Raskot Municipality",
      "Tilagufa Municipality",
      "Sanni Triveni Rural Municipality",
      "Narharinath Rural Municipality",
      "Pachaljharana Rural Municipality",
      "Palata Rural Municipality",
      "Mahawai Rural Municipality",
      "Subha Kalika Rural Municipality"
    ],
    "Mugu": [
      "Chhayanath Rara Municipality",
      "Mugum Karmarong Rural Municipality",
      "Soru Rural Municipality",
      "Khatyad Rural Municipality"
    ],
    "Salyan": [
      "Shaarda Municipality",
      "Bagchaur Municipality",
      "Bangad Kupinde Municipality",
      "Kalimati Rural Municipality",
      "Tribeni Rural Municipality",
      "Darma Rural Municipality",
      "Kapurkot Rural Municipality",
      "Kumakh Rural Municipality",
      "Siddha Kumakh Rural Municipality",
      "Chhatreshwori Rural Municipality"
    ],
    "Surkhet": [
      "Birendranagar Municipality",
      "Bheriganga Municipality",
      "Gurbhakot Municipality",
      "Panchapuri Municipality",
      "Lekbeshi Municipality",
      "Chaukune Rural Municipality",
      "Simta Rural Municipality",
      "Chingad Rural Municipality",
      "Barahtal Rural Municipality"
    ],
    "Western Rukum": [
      "Musikot Municipality",
      "Chaurjahari Municipality",
      "Aathbiskot Municipality",
      "Tribeni Rural Municipality",
      "Sani Bheri Rural Municipality",
      "Banfikot Rural Municipality"
    ]
  },
  "Province 7": {
    "Achham": [
        "Mangalsen Municipality",
        "Sanphebagar Municipality",
        "Chaurpati Rural Municipality",
        "Bajura Rural Municipality",
        "Kailash Rural Municipality",
        "Sahbani Rural Municipality",
        "Bajhang Rural Municipality"
      ],
      "Baitadi": [
        "Dasharathchand Municipality",
        "Melauli Municipality",
        "Surnaya Rural Municipality",
        "Bali Municipality",
        "Baitadi Rural Municipality",
        "Jaya Prithvi Municipality",
        "Yashodhara Rural Municipality"
      ],
      "Bajhang": [
        "Bajhang Municipality",
        "Bungkot Rural Municipality",
        "Panchegaun Rural Municipality",
        "Talkot Rural Municipality",
        "Chure Rural Municipality"
      ],
      "Darchula": [
        "Darchula Municipality",
        "Byas Rural Municipality",
        "Vyas Rural Municipality",
        "Kailash Rural Municipality",
        "Chaudhar Rural Municipality"
      ],
      "Dadeldhura": [
        "Dadeldhura Municipality",
        "Shivganj Rural Municipality",
        "Ganyapadhura Rural Municipality",
        "Sakla Rural Municipality",
        "Bhimdatta Municipality"
      ],
      "Kailali": [
        "Dhangadhi Sub Metropolitan City",
        "Tikapur Municipality",
        "Lamki Chuha Municipality",
        "Godawari Municipality",
        "Khaptad Chhededaha Rural Municipality",
        "Rajipur Rural Municipality"
      ],
      "Kanchanpur": [
        "Mahendranagar Municipality",
        "Shuklaphanta Municipality",
        "Belauri Municipality",
        "Bhimdatta Municipality",
        "Kanchanpur Rural Municipality"
      ],
      "Kailash": [
        "Kailash Municipality",
        "Aadarsha Rural Municipality",
        "Raati Rural Municipality"
      ],
      "Seti": [
        "Seti Municipality",
        "Jaljala Rural Municipality",
        "Lakhanpur Rural Municipality",
        "Chhatiwan Rural Municipality"
      ]
  }
};

// Initialize the dashboard
$(document).ready(function() {
  updateStats();
  renderPatients();
  renderStaff();
  renderFinance();
  
  // Set default date to today for forms
  const today = new Date().toISOString().split('T')[0];
  $('#admitDate').val(today);
  $('#financeDate').val(today);
  
  // Location hierarchy event listeners
  $('#province').change(function() {
    const province = $(this).val();
    const $district = $('#district');
    
    $district.empty().append('<option value="">Select District</option>');
    $('#localGovernment').empty().append('<option value="">Select Local Government</option>').prop('disabled', true);
    
    if (province) {
      const districts = Object.keys(locationData[province]);
      districts.forEach(district => {
        $district.append(`<option value="${district}">${district}</option>`);
      });
      $district.prop('disabled', false);
    } else {
      $district.prop('disabled', true);
    }
  });
  
  $('#district').change(function() {
    const province = $('#province').val();
    const district = $(this).val();
    const $localGov = $('#localGovernment');
    
    $localGov.empty().append('<option value="">Select Local Government</option>');
    
    if (district) {
      const localGovs = locationData[province][district];
      localGovs.forEach(lg => {
        $localGov.append(`<option value="${lg}">${lg}</option>`);
      });
      $localGov.prop('disabled', false);
    } else {
      $localGov.prop('disabled', true);
    }
  });
  
  // Add cause button click handler
  $('#addCauseBtn').click(function() {
    const cause = $('#patientCauseInput').val().trim();
    if (cause) {
      patientCauses.push(cause);
      renderCauseList();
      $('#patientCauseInput').val('');
    }
  });
});

// Render cause list
function renderCauseList() {
  const $causeList = $('#causeList');
  $causeList.empty();
  
  if (patientCauses.length === 0) {
    $causeList.append('<div class="text-muted">No problems/causes added</div>');
    return;
  }
  
  patientCauses.forEach((cause, index) => {
    $causeList.append(`
      <div class="cause-item d-flex justify-content-between align-items-center">
        <span>${cause}</span>
        <button class="btn btn-sm btn-outline-danger" onclick="removeCause(${index})">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `);
  });
}

// Remove cause from list
function removeCause(index) {
  patientCauses.splice(index, 1);
  renderCauseList();
}

// Patient form submission
$('#patientForm').submit(function(e) {
  e.preventDefault();
  const patient = {
    id: Date.now(),
    name: $('#patientName').val(),
    dob: $('#dob').val(),
    admitDate: $('#admitDate').val(),
    father: $('#fatherName').val(),
    province: $('#province').val(),
    district: $('#district').val(),
    localGovernment: $('#localGovernment').val(),
    phone: $('#patientPhone').val(),
    causes: [...patientCauses], // Copy the array
    createdAt: new Date().toISOString()
  };
  
  patients.push(patient);
  saveData('hrdc_patients', patients);
  renderPatients();
  updateStats();
  
  // Reset form and causes
  this.reset();
  patientCauses = [];
  renderCauseList();
  $('#admitDate').val(new Date().toISOString().split('T')[0]);
  $('#district').prop('disabled', true);
  $('#localGovernment').prop('disabled', true);
  
  showAlert('Patient added successfully!', 'success');
});

// Staff form submission (unchanged from previous version)
$('#staffForm').submit(function(e) {
  e.preventDefault();
  const staffMember = {
    id: Date.now(),
    name: $('#staffName').val(),
    gmail: $('#staffGmail').val(),
    post: $('#staffPost').val(),
    phone: $('#staffPhone').val(),
    address: $('#staffAddress').val(),
    createdAt: new Date().toISOString()
  };
  
  staff.push(staffMember);
  saveData('hrdc_staff', staff);
  renderStaff();
  updateStats();
  this.reset();
  showAlert('Staff member added successfully!', 'success');
});

// Finance form submission (unchanged from previous version)
$('#financeForm').submit(function(e) {
  e.preventDefault();
  const record = {
    id: Date.now(),
    date: $('#financeDate').val(),
    description: $('#financeDesc').val() || 'No description',
    income: parseFloat($('#incomeAmt').val()) || 0,
    expense: parseFloat($('#expenseAmt').val()) || 0,
    createdAt: new Date().toISOString()
  };
  
  finance.push(record);
  saveData('hrdc_finance', finance);
  renderFinance();
  updateStats();
  this.reset();
  $('#financeDate').val(new Date().toISOString().split('T')[0]);
  showAlert('Financial record added successfully!', 'success');
});

// Delete patient
function deletePatient(id) {
  if (confirm('Are you sure you want to delete this patient record?')) {
    patients = patients.filter(p => p.id !== id);
    saveData('hrdc_patients', patients);
    renderPatients();
    updateStats();
    showAlert('Patient record deleted!', 'warning');
  }
}

// Delete staff (unchanged from previous version)
function deleteStaff(id) {
  if (confirm('Are you sure you want to delete this staff member?')) {
    staff = staff.filter(s => s.id !== id);
    saveData('hrdc_staff', staff);
    renderStaff();
    updateStats();
    showAlert('Staff member deleted!', 'warning');
  }
}

// Delete finance record (unchanged from previous version)
function deleteFinance(id) {
  if (confirm('Are you sure you want to delete this financial record?')) {
    finance = finance.filter(f => f.id !== id);
    saveData('hrdc_finance', finance);
    renderFinance();
    updateStats();
    showAlert('Financial record deleted!', 'warning');
  }
}

// Render patients table (updated with new fields)
function renderPatients() {
  const $tbody = $('#patientsList');
  $tbody.empty();
  
  if (patients.length === 0) {
    $tbody.append('<tr><td colspan="7" class="text-center text-muted">No patient records found</td></tr>');
    return;
  }
  
  patients.forEach(patient => {
    const location = `${patient.localGovernment}, ${patient.district}, ${patient.province}`;
    const causes = patient.causes.join(', ') || 'None recorded';
    
    $tbody.append(`
      <tr>
        <td>${patient.name}</td>
        <td>${formatDate(patient.dob)}</td>
        <td>${formatDate(patient.admitDate)}</td>
        <td>${location}</td>
        <td>${patient.phone}</td>
        <td>${causes}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary btn-action" onclick="editPatient(${patient.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger btn-action" onclick="deletePatient(${patient.id})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `);
  });
}

// Render staff table (unchanged from previous version)
function renderStaff() {
  const $tbody = $('#staffList');
  $tbody.empty();
  
  if (staff.length === 0) {
    $tbody.append('<tr><td colspan="6" class="text-center text-muted">No staff members found</td></tr>');
    return;
  }
  
  staff.forEach(member => {
    $tbody.append(`
      <tr>
        <td>${member.name}</td>
        <td>${member.gmail}</td>
        <td>${member.post}</td>
        <td>${member.phone}</td>
        <td>${member.address}</td>
        <td>
          <button class="btn btn-sm btn-outline-success btn-action" onclick="editStaff(${member.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger btn-action" onclick="deleteStaff(${member.id})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `);
  });
}

// Render finance table (unchanged from previous version)
function renderFinance() {
  const $tbody = $('#financeList');
  $tbody.empty();
  
  if (finance.length === 0) {
    $tbody.append('<tr><td colspan="6" class="text-center text-muted">No financial records found</td></tr>');
    return;
  }
  
  let runningBalance = 0;
  
  // Sort by date descending
  const sortedFinance = [...finance].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  sortedFinance.forEach(record => {
    runningBalance += (record.income - record.expense);
    $tbody.append(`
      <tr>
        <td>${formatDate(record.date)}</td>
        <td>${record.description}</td>
        <td class="text-success">${record.income > 0 ? 'RS' + record.income.toFixed(2) : '-'}</td>
        <td class="text-danger">${record.expense > 0 ? 'RS' + record.expense.toFixed(2) : '-'}</td>
        <td class="font-weight-bold">RS${runningBalance.toFixed(2)}</td>
        <td>
          <button class="btn btn-sm btn-outline-info btn-action" onclick="editFinance(${record.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger btn-action" onclick="deleteFinance(${record.id})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `);
  });
}

// Update statistics (unchanged from previous version)
function updateStats() {
  $('#totalPatients').text(patients.length);
  $('#totalStaff').text(staff.length);
  
  const netBalance = finance.reduce((sum, record) => sum + (record.income - record.expense), 0);
  $('#netBalance').text('RS' + netBalance.toFixed(2));
}

// Save data to localStorage (unchanged from previous version)
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Format date for display (unchanged from previous version)
function formatDate(dateString) {
  if (!dateString) return '-';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Show alert message (unchanged from previous version)
function showAlert(message, type) {
  const alert = $(`
    <div class="alert alert-${type} alert-dismissible fade show fixed-top mx-auto mt-3" style="max-width: 500px;">
      ${message}
      <button type="button" class="close" data-dismiss="alert">
        <span>&times;</span>
      </button>
    </div>
  `);
  
  $('body').append(alert);
  setTimeout(() => alert.alert('close'), 3000);
}

// Export to Excel (updated with new patient fields)
function downloadExcel() {
  const wb = XLSX.utils.book_new();
  
  // Patients sheet
  const patientData = patients.map(p => ({
    'Full Name': p.name,
    'Date of Birth': p.dob,
    'Admission Date': p.admitDate,
    "Father's Name": p.father,
    'Province': p.province,
    'District': p.district,
    'Local Government': p.localGovernment,
    'Phone Number': p.phone,
    'Problems/Causes': p.causes.join(', ')
  }));
  const patientSheet = XLSX.utils.json_to_sheet(patientData);
  XLSX.utils.book_append_sheet(wb, patientSheet, "Patients");
  
  // Staff sheet
  const staffData = staff.map(s => ({
    'Full Name': s.name,
    'Email': s.gmail,
    'Position': s.post,
    'Phone Number': s.phone,
    'Address': s.address
  }));
  const staffSheet = XLSX.utils.json_to_sheet(staffData);
  XLSX.utils.book_append_sheet(wb, staffSheet, "Staff");
  
  // Finance sheet
  const financeData = finance.map(f => ({
    'Date': f.date,
    'Description': f.description,
    'Income (RS)': f.income,
    'Expense (RS)': f.expense
  }));
  const financeSheet = XLSX.utils.json_to_sheet(financeData);
  XLSX.utils.book_append_sheet(wb, financeSheet, "Finance");
  
  XLSX.writeFile(wb, "HRDC_Data_Export.xlsx");
  showAlert('Excel file downloaded successfully!', 'info');
}

// Edit patient (updated with new fields)
function editPatient(id) {
  const patient = patients.find(p => p.id === id);
  if (patient) {
    // Populate form with patient data
    $('#patientName').val(patient.name);
    $('#dob').val(patient.dob);
    $('#admitDate').val(patient.admitDate);
    $('#fatherName').val(patient.father);
    $('#patientPhone').val(patient.phone);
    
    // Set location values
    $('#province').val(patient.province).trigger('change');
    setTimeout(() => {
      $('#district').val(patient.district).trigger('change');
      setTimeout(() => {
        $('#localGovernment').val(patient.localGovernment);
      }, 100);
    }, 100);
    
    // Set causes
    patientCauses = [...patient.causes];
    renderCauseList();
    
    // Remove the patient from the array
    patients = patients.filter(p => p.id !== id);
    saveData('hrdc_patients', patients);
    
    // Scroll to form
    $('html, body').animate({
      scrollTop: $('#patientForm').offset().top - 20
    }, 500);
    
    showAlert('Patient data loaded for editing', 'info');
  }
}

// Edit staff (unchanged from previous version)
function editStaff(id) {
  const member = staff.find(s => s.id === id);
  if (member) {
    // Populate form with staff data
    $('#staffName').val(member.name);
    $('#staffGmail').val(member.gmail);
    $('#staffPost').val(member.post);
    $('#staffPhone').val(member.phone);
    $('#staffAddress').val(member.address);
    
    // Remove the staff from the array
    staff = staff.filter(s => s.id !== id);
    saveData('hrdc_staff', staff);
    
    // Scroll to form
    $('html, body').animate({
      scrollTop: $('#staffForm').offset().top - 20
    }, 500);
    
    showAlert('Staff data loaded for editing', 'info');
  }
}

// Edit finance (unchanged from previous version)
function editFinance(id) {
  const record = finance.find(f => f.id === id);
  if (record) {
    // Populate form with finance data
    $('#financeDate').val(record.date);
    $('#financeDesc').val(record.description);
    $('#incomeAmt').val(record.income);
    $('#expenseAmt').val(record.expense);
    
    // Remove the record from the array
    finance = finance.filter(f => f.id !== id);
    saveData('hrdc_finance', finance);
    
    // Scroll to form
    $('html, body').animate({
      scrollTop: $('#financeForm').offset().top - 20
    }, 500);
    
    showAlert('Financial record loaded for editing', 'info');
  }
}