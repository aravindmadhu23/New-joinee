import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import './PoliciesPage.css';

// ─── POLICY DATA ───────────────────────────────────────────────
const policyCategories = [
  {
    id: 'recruitment',
    label: 'Recruitment & Hiring',
    policies: [
      {
        title: 'Recruitment',
        image: 'recruitment.png',
        objective: 'To lay down the conditions for the hiring process which is consistent with the company policy.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Manpower Forecast', text: 'The company in tandem with the concerned department head/manager will identify the manpower requirements based on the business requirements/client specifications. Based on this analysis the monthly/quarterly/yearly projection will be carried out. The projection will be sent to the Human Resource Manager in writing.\n\nBased on the requirements, job specification and the job description are made available for the specific requirements. After the approval from the concerned department manager, the recruitment will be carried out.\n\nThe company will select the people with required skills and qualification suitable to perform the job efficiently.\n\nThe organization reserves the right to fill in positions internally for the candidates who possess the skills and qualification described in the job specification/s.\n\nWhen the positions could not be filled internally, the positions will be advertised externally and will be made available to be filled by external candidates.' },
          { heading: 'Hiring Methods', list: ['Through internal advertisements', 'Existing company data base', 'Advertisements in media', 'Any other third party or cost-effective method', 'Employee referrals'] },
          { heading: 'Categories of Hiring', list: ["Fresher's who are college graduates", 'Laterals/experienced candidates', 'Candidates appointed on vendor rolls', 'Direct Contract / Indirect Contracts'], note: 'Qualification depends and varies on the job description.' },
          { heading: 'Selection', text: 'The selection process varies with the job positions. The procedures include aptitude test, technical panel interviews, HR interviews etc. If the candidate meets the requirements set by the company and possesses the skills for the job profile, then he/she will be selected for employment.' },
          { heading: 'Background / Reference Check', text: 'The background/reference check will be carried out by the Human Resource Department or an external agency appointed by the company regarding the candidate\'s educational qualifications and employment records furnished at the time of selection. If any information provided by the employee is found to be incorrect or he/she have withheld/concealed facts, the company reserves the right to cancel the appointment with immediate effect.' },
          { heading: 'Verification Documents Required', list: ['10th Std Certificate', '12th Std Certificate', 'Graduation Mark list(s)', 'Graduation Certificate', 'Post Graduation Mark list', 'Post Graduation Certificates', 'Experience certificates from all past employers', 'Relieving letter from the last employer', 'Pay slip of the last drawn salary', 'Form 16 (If Applicable)', 'Passport Copy/Driving License/PAN Card/any other valid photo identity'] },
          { heading: 'Posting / Transfer', text: 'While the initial place of work is as per the intimation of the offer letter, he/she may be liable to be transferred to any of the department/division/client sites in India or abroad as required by the exigencies of the business at the discretion of the company.' },
          { heading: 'Probation', text: 'All employees who join the company on regular rolls will have to undergo a period of probation of 6 months from the date of joining. During probation, the employee\'s engagement is strictly provisional. The company reserves the right to terminate employment if performance is found unsatisfactory.\n\nOn successful completion of probation, a confirmation letter will be issued. Probation can be extended depending on the number of leaves availed on loss of pay. A person who is rehired must undergo probation for 3 months only.\n\nFor contract to regular conversion: if the person has undergone a 6-month contract, probation is 3 months; if 3-month contract, probation is 6 months.' },
          { heading: 'Termination of Services', text: 'During probation, a one-month notice period is required from either side. On confirmation, either party may terminate with one calendar month\'s written notice. The company may choose to pay salary in lieu of notice.\n\nWhere circumstances warrant, the company reserves the right to terminate employment with immediate effect, without payment depending on circumstances.' },
        ]
      },
      {
        title: 'Equal Employment Opportunity',
        image: 'equal-employment.png',
        objective: 'iDynamics Software Pvt Ltd. is committed to a policy of equality and opportunity in every aspect of its relations with its employees, without regard to age, citizenship status, color, disability, marital or parental status, national origin, race, religion, sex or sexual orientation.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Disability: an individual is considered to have a disability if s/he has a physical or mental impairment which limits one or more major life activities, or having any previous record of such impairment.\n\nThe prohibition of employment discrimination applies to all aspects of hiring, promotion, role changes. This includes recruitment, hiring or appointment, selection for training, transfer, layoff, promotion, granting of tenure, rates of pay and other forms of compensation, and participation in educational, social, and recreational programs, disciplinary actions.' }
        ]
      },
      {
        title: 'Nepotism',
        image: 'nepotism.png',
        objective: 'To lay guidelines to the appointment of qualified and eligible relatives of iDynamics Software Pvt Ltd. for suitable job positions.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'The company will not discriminate its employment opportunities based on marital or family relations. Qualified relatives of employees are encouraged to apply for eligible jobs if it does not create conflicts in any forms.' }
        ]
      },
    ]
  },
  {
    id: 'conduct',
    label: 'Workplace Conduct',
    policies: [
      {
        title: 'Workplace Harassment',
        image: 'workplace-harassment.png',
        objective: 'To prevent and create awareness among employees in recognizing and preventing workplace harassment.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Definition', text: 'Harassment refers to any unwelcome written (electronic/mobile media), verbal or physical conduct that generates or propagates hostility towards a person on the basis of race, color, gender, religion, marital or parental status, national origin, sex or sexual orientation.\n\nThis includes conduct that has direct impact on performance, interferes with work opportunities, or creates an offensive workplace atmosphere.' },
          { heading: 'Retaliation', text: 'Refers to any act which is either direct or indirect in the form of penalty, reprisal, harassment, or discrimination against any person or groups of person under this policy.' },
          { heading: 'Sexual Harassment', text: 'Any unwelcome sexual advance, request for sexual favors, and written/verbal/physical conduct by any employee or third party. Withholding/favoring any promotions, work, or training opportunities for sexual favors is deemed sexual harassment.\n\nAny person found responsible for harassment will be subject to immediate termination following investigations. The victim can report to the reporting manager or highest authority without delay.' },
        ]
      },
      {
        title: 'Code of Conduct',
        image: 'code-of-conduct.png',
        objective: 'To lay down the general standards of conduct to be followed by employees of iDynamics Software Pvt Ltd.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Employees should have sound judgment on facts and ensure the well-being of colleagues to maintain a positive, harmonious and productive work environment.' },
          { heading: 'Principles', list: ['Discipline', 'Maintain high standard of integrity and behavior', 'Commitment to organizational goals or objectives', 'Keep keen interest in establishment of healthy personnel practices & relations', 'Team work and co-operation'] },
        ]
      },
      {
        title: 'Dress Code',
        image: 'dress-code.png',
        objective: 'To give guidelines to the general appearance of employees and enhance the corporate image of iDynamics.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Gentlemen — Formal (Mon–Wed)', list: ['Full sleeved light coloured plain shirts', 'Dark coloured formal trousers', 'Belt, socks, formal leather shoes', 'Sneakers, sports shoes and slippers are not permitted', 'Jeans are not permitted on formal dressing days'] },
          { heading: 'Gentlemen — Casual (Thu, Fri, Weekends)', list: ['Jeans/Casual Trousers', 'Collared T-shirts, short kurtas, casual shirts', 'Sports shoes/formal shoes', 'Sandals, slippers, round neck T-shirts not permitted'] },
          { heading: 'Women — Formal (Mon–Wed)', list: ['Churidhar / Salwar Kameez / Saree', 'Western formals with trousers/skirts', 'Gowns, jeans, slippers not permitted on formal days'] },
          { heading: 'Women — Casual (Thu, Fri, Weekends)', list: ['Jeans/Casual Trousers, T-shirts, short kurtas', 'Tops/straight skirts (Western style)', 'Gowns/frocks, slippers not permitted'] },
          { note: 'On client visits, all employees must adhere to formal dress code regardless of the day.' },
        ]
      },
      {
        title: 'Alcohol & Drug Abuse',
        image: 'alcohol-drug-abuse.png',
        objective: 'To provide a safe and conducive work environment free from drug and alcohol abuse.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Employees while in premises should not indulge in using drugs and alcohol. No business activities should be conducted under the influence of drugs or alcohol. Violation may lead to disciplinary action including immediate termination. The company reserves the right to test for drugs under reasonable suspicion.' }
        ]
      },
      {
        title: 'Language of Communication',
        image: 'language-communication.png',
        objective: 'To provide guidelines regarding communication within the workplace.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'The official language of communication is English in the office premises.' }
        ]
      },
      {
        title: 'Conflict of Interest',
        image: 'conflict-of-interest.png',
        objective: 'To provide employees with guidelines on conduct conducive to business interest of the organization.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Unacceptable Behaviour', list: ['Divulging classified information without authorization', 'Serving any capacity of any competing company', 'Using company equipment for personal purposes', 'Conducting business that violates any law', 'Bribing or attempting to bribe', 'Taking favours/gifts from any parties', 'Falsifying records or forging documents'] },
          { text: 'Indulgence may lead to disciplinary action up to and including immediate termination or prosecution under Indian law.' }
        ]
      },
      {
        title: 'Borrowing / Accepting / Giving Gifts',
        image: 'borrowing-gifts.png',
        objective: 'To provide guidelines on accepting/giving/borrowing gifts from clients and patrons.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'No employee is allowed to borrow, accept, or give any money, gift, reward or compensation for personal gains from any person/client with whom he/she has official dealings. No employee shall engage in any act that involves or gives the impression of bribery or illegal activity.' }
        ]
      },
    ]
  },
  {
    id: 'hours',
    label: 'Working Hours',
    policies: [
      {
        title: 'Working Hours & Facilities',
        image: 'working-hours.png',
        objective: 'To lay down the regular and shift working hours of the organization.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'iDynamics operates in shifts from Monday to Friday.' },
          { heading: 'Shifts', list: ['General Day Shift: 10:00 AM to 07:00 PM', 'Early Day Shift: 09:00 AM to 06:00 PM', 'Late Day Shift: 11:00 AM to 08:00 PM', 'General Night Shift: 07:00 PM to 04:00 AM', 'Early Night Shift: 06:00 PM to 03:00 AM', 'Late Night Shift: 08:00 PM to 05:00 AM'] },
          { text: 'Shift changes require prior approval from the HR Manager. Break time should not exceed 1 hour. Total working hours shall not be less than 45 hrs per week.' },
        ]
      },
      {
        title: 'Flexi Working Hours',
        image: 'flexi-hours.png',
        objective: 'To provide guidelines for flexible work timing arrangements.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Those who require relaxation in shift timings should request the reporting manager with the time frame and reason. If it does not interfere with deliverables, it would be considered. This should not be regarded as a permanent arrangement.' }
        ]
      },
      {
        title: 'Late / Early Permission',
        image: 'late-early-permission.png',
        objective: 'To maintain punctuality across the organization.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'First and last five minutes of a working day will be considered as grace time. Apart from that, two times in a month with a maximum of thirty minutes will be allowed for late/early permission. Beyond that, half day will be deducted from leave or treated as half day loss of pay for two consecutive late/early permissions.' }
        ]
      },
      {
        title: 'Transportation',
        image: 'transportation.png',
        objective: 'To provide guidelines for transportation facilities for comfortable commutation.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { list: ['General shift employees: picked up and dropped at a common zonal point nearest to residence', 'Night shift employees: picked from and dropped at residence/nearest boarding point'], text: 'Transportation is provided free of charge to employees who opt for it.' },
        ]
      },
    ]
  },
  {
    id: 'leave',
    label: 'Leave & Benefits',
    policies: [
      {
        title: 'Holidays',
        image: 'holidays.png',
        objective: 'To provide guidelines and description of permissible holidays.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Annual Holidays (11 days)', list: ['Republic Day (January 26)', 'Independence Day (August 15)', 'Gandhi Jayanthi (October 2)', 'Labor Day (May 1)', 'Onam (3 days)', 'New Year', 'Deepavali', 'Maha Navami', 'Christmas'] },
          { heading: 'Restricted Holidays', text: 'Pongal, Good Friday, Vishu and Ramzan are declared as restricted holidays. Every employee can avail any one of these restricted holidays with prior approval.' },
        ]
      },
      {
        title: 'Leave Policy',
        image: 'leave-policy.png',
        objective: 'To ensure all staff are aware of planned leave procedures, notification requirements, and disciplinary measures for unauthorized absenteeism.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Attendance Expectations', text: 'Employees are expected to be reliable and punctual. Absenteeism and tardiness place a burden on other employees. Employees who cannot avoid being late must notify their supervisor as soon as possible.' },
          { heading: 'Unscheduled Leave Rules', list: ['Absences without prior notification are marked as unscheduled leave', 'Two unscheduled leaves in one month results in a warning letter + Leave Without Pay', 'Three unscheduled leaves in two consecutive months or two warnings in 6 months results in disciplinary action up to termination', 'All leaves must be recorded and sent to HR by the 25th of every month'] },
          { heading: 'Casual / Sick Leave', text: 'Entitled to 10 CL/SL per calendar year after 6 months of service. Cannot be availed for more than 3 consecutive days. Maximum twice a month, up to 4 days. Cannot be clubbed with Annual Holidays or Compensatory Off. Sick leave beyond 3 days requires a medical certificate. Un-availed leaves lapse at year end.' },
          { heading: 'Annual Holiday', text: 'Entitled to 10 Annual Holidays per calendar year, increasing by 1 day every year from the 1st January following one year of service, up to a maximum of 15 days. Annual holidays can be carry forwarded only under exceptional circumstances with prior management approval.' },
          { heading: 'Compensatory Time Off', text: 'Employees required to work on holidays/weekends are entitled to compensatory off within 30 working days, preferably on a US/UK holiday. Cannot be clubbed with other leave, encashed, or carried forward.' },
          { heading: 'Leave Application Procedure', text: 'Annual holiday requests should be submitted 20 days prior. Leave shall not be taken if not approved 15 days prior. Any person on long leave should transfer work information to the assigned person.' },
        ]
      },
      {
        title: 'Maternity Leave',
        image: 'maternity-leave.png',
        objective: 'To regulate employment of women before and after child-birth and provide maternity benefit.',
        scope: 'Female employees on confirmed employment with 180 days of continuous service.',
        sections: [
          { heading: 'Eligibility & Benefit', list: ['Maximum 12 weeks (6 weeks before, 6 weeks after delivery)', 'Restricted to two surviving children only', 'Applicant must inform HR minimum 2 months in advance', 'Application must be supported by medical certificate', 'Un-availed maternity leave is non-encashable'] },
          { heading: 'Leave for Illness from Pregnancy', text: 'Entitled to 4 weeks leave with pay for illness arising out of pregnancy, delivery, or premature birth. Requires a valid medical certificate.' },
        ]
      },
      {
        title: 'Paternity Leave',
        image: 'paternity-leave.png',
        objective: 'To regulate employment of men before and after child-birth and provide paternity benefit.',
        scope: 'Male employees on confirmed employment with 180 days of continuous service.',
        sections: [
          { list: ['Maximum 7 days paternity leave', '2 days before child birth, 5 days after', 'Restricted to two surviving children only', 'Must inform HR minimum 2 weeks in advance', 'Supported by medical certificate', 'Non-encashable and not transferable'] },
        ]
      },
    ]
  },
  {
    id: 'duties',
    label: 'Duties & Assets',
    policies: [
      {
        title: 'Duties & Responsibilities',
        image: 'duties-responsibilities.png',
        objective: 'To provide the importance of duties and responsibilities assigned during the employee\'s tenure.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'The employee will serve the company in assigned positions and any other capacities as requested. The company expects a high standard of initiative, efficiency and economy. The employee shall devote full attention exclusively to the business of the company and shall not, without prior written consent, carry on any other employment, business or trade.' }
        ]
      },
      {
        title: 'Company Assets',
        image: 'company-assets.png',
        objective: 'To provide guidelines regarding usage and maintenance of assets allocated to employees.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Company shall provide mobile phones, laptops or other assets for official use. These shall be returned in good condition on cessation of employment.' },
          { heading: 'Software Rules', list: ['Downloading illegal/unauthorized software is strictly prohibited', 'Special licensing agreements may contain electronic serial numbers', 'Each employee is responsible for any software on assigned devices', 'Misuse of company property is prohibited'] },
        ]
      },
      {
        title: 'Loss of Company Assets',
        image: 'loss-company-assets.png',
        objective: 'To provide guidelines in the event of loss or damage of company assets in employee possession.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'A company asset lost during employee custody shall be replaced at the employee\'s account. The cost shall be fully deducted from salary on a monthly basis up to a maximum of 20% or cost of the asset, whichever is lower.' }
        ]
      },
    ]
  },
  {
    id: 'infosec',
    label: 'Information Security',
    policies: [
      {
        title: 'Company Records',
        image: 'company-records.png',
        objective: 'To make it explicit that the Company is the sole owner for all records.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'All forms of records — printed, electronic books, papers, documents etc. — are the possession of the company. Manipulation of company records is a serious offence and may lead to immediate termination.' }
        ]
      },
      {
        title: 'Confidentiality',
        image: 'confidentiality.png',
        objective: 'To provide guidelines on the importance of maintaining confidentiality in business matters.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Employees should maintain the highest degree of secrecy about strategy, employees, business lines, products, intellectual property, records, and documents. Information shall only be used in authorized manners. No employee shall, at any time after leaving the company, disclose any Confidential information or trade secrets. Infringement renders the employee liable to dismissal or prosecution.' }
        ]
      },
      {
        title: 'Non-Solicitation',
        image: 'non-solicitation.png',
        objective: 'To provide guidelines on adherence to non-solicitation during and after employment.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'During employment and for one year thereafter, the employee shall not directly or indirectly solicit, aid, or induce any employee to leave the company or any customer/potential customer of the company. No employee can represent himself/herself as being connected to the company after leaving.' }
        ]
      },
      {
        title: 'Intellectual Property Rights',
        image: 'intellectual-property.png',
        objective: 'To give guidelines on the absolute right of the company over intellectual properties.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'All intellectual property rights in any work, invention, discovery, idea, technique, code, or improvement made by the employee during employment — whether during regular hours or not — shall be the sole and exclusive property of the company.' },
          { heading: 'Covered Items', list: ['Trade secrets, confidential business information, know-how', 'Trademarks, service marks, brand names, trade dress', 'Patents including design and utility patents', 'All computer systems, software, databases, APIs, GUIs, algorithms'] },
        ]
      },
      {
        title: 'Inventions & Publications',
        image: 'inventions-publications.png',
        objective: 'To give guidelines on the company\'s right over inventions and publications.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Any inventions, designs, improvements, reports, manuals, papers or publications produced during employment shall be the right and property of the company, even after employment has terminated. Each employee must irrevocably assign all such work to the company.' }
        ]
      },
      {
        title: 'Information Classification',
        image: 'info-classification.png',
        objective: 'To give guidelines regarding classification and handling of information.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Highly Confidential', text: 'Information of highest sensitivity. Could cause severe harm to financial stability, public confidence, or corporate image. Access must be strictly limited at all times.' },
          { heading: 'Confidential', text: 'High sensitivity due to newsworthiness, potential financial loss, or impact on customer/public confidence. Revealed on a "need to know" basis only.' },
          { heading: 'Internal Use Only', text: 'Information to be kept within the company. All internal information defaults to this class.' },
          { heading: 'Public', text: 'Information that does not require stringent protection since disclosure is unlikely to expose the company to loss.' },
        ]
      },
    ]
  },
  {
    id: 'itsecurity',
    label: 'IT & Security',
    policies: [
      {
        title: 'Access to Systems',
        image: 'access-systems.png',
        objective: 'To provide guidelines regarding system access for business requirements.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Access is provided on a strict "need to know" and "need to do" basis. Changing security configurations to bypass controls is Gross Misconduct leading to termination without notice.' }
        ]
      },
      {
        title: 'Physical Access Controls',
        image: 'physical-access.png',
        objective: 'To provide guidelines on the security aspects of the facility.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Access Card Rules', list: ['Display photo identity cards at all times', 'Use ID cards at entry/exit reader every time', 'Loss of ID card: Rs.500 deduction for replacement', 'Failure to return temporary pass: Rs.150/day deduction', 'Working hours zero without leave application = Leave Without Pay'] },
          { heading: 'Restrictions', list: ['No external storage devices (personal laptops, USBs, etc.) in company facility', 'Casual entry on holidays is not entertained — prior permission required'] },
        ]
      },
      {
        title: 'Email Policy',
        image: 'email-policy.png',
        objective: 'To give guidelines for using company mail for business communication.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Company email is provided purely for business purposes. Passwords are confidential and must be changed periodically. The company reserves the right to revoke email access at any time.' }
        ]
      },
      {
        title: 'Email Security Policy',
        image: 'email-security.png',
        objective: 'To protect information assets from threats due to e-mail use and prevent damage to reputation.',
        scope: 'All employees of iDynamics Software Pvt Ltd. — compliance is mandatory.',
        sections: [
          { heading: 'Email Use Rules', list: ['Only officially approved email services may be used', 'Hotmail, Yahoo Mail, Gmail etc. must not be used', 'Use of other users\' email accounts is prohibited', 'Email must not send sexist, racist, or illegal content', 'Instant messaging (MSN, Yahoo, Skype) is blocked'] },
          { heading: 'Sending Email', list: ['Do not send commercially sensitive info without authorization', 'Classified information must be encrypted over external networks', 'Each email must be classified per Data Classification policy'] },
          { heading: 'Monitoring', text: 'E-mail activity may be monitored for compliance with Information Security Policy and legal requirements. All incoming and outgoing email is scanned for inappropriate content.' },
        ]
      },
      {
        title: 'Internet Use Security',
        image: 'internet-security.png',
        objective: 'To ensure secure use of the Internet and prevent damage from improper use.',
        scope: 'All employees of iDynamics Software Pvt Ltd. — compliance is mandatory.',
        sections: [
          { heading: 'Internet Use Rules', list: ['Internet must not be used for non-business purposes', 'Internet-hosted email services (Hotmail, Yahoo, Gmail) not allowed', 'Online messaging (MSN, Yahoo Messenger) is not allowed', 'Skype allowed for development team only for UK communication', 'Downloading software is blocked — contact IT if needed', 'Attempting to access inappropriate sites may result in disciplinary action'] },
          { heading: 'Monitoring', text: 'All access or attempted access to websites is logged. The Company reserves the right to monitor all internet activity.' },
        ]
      },
      {
        title: 'Installing & Removing Software',
        image: 'installing-software.png',
        objective: 'To give guidelines on installing and removal of software.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { list: ['Request specialized software through system administrator with manager approval', 'Do not download any software from the internet, even freeware', 'Do not remove any licensed software from system', 'Violations will face disciplinary procedure, possibly termination'] }
        ]
      },
      {
        title: 'Clear Desk & Clear Screen',
        image: 'clear-desk-screen.png',
        objective: 'To ensure the security of confidential information at all times.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { text: 'Clear Screen: Lock your computer screen when you move away from the desk (CTRL+ALT+DEL). Ensure confidential information on screen is not viewed by unauthorized persons.\n\nClear Desk: Maintain a clean desk ensuring confidential information on paper or media is not left unattended when you are away.' }
        ]
      },
      {
        title: 'Cyber Crimes',
        image: 'cyber-crimes.png',
        objective: 'To provide guidelines on the seriousness of cyber crimes.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { heading: 'Strict Prohibitions', list: ['Unauthorized access to any computer system or network', 'Downloading, copying, or extracting any information without authorization', 'Introduction of any harmful code', 'Any action causing non-functioning or denial of access', 'Tampering with or manipulation of systems/networks', 'Any contravention of the Information Technology Act, 2000'] },
          { text: 'Reporting incidents is the responsibility of all employees. Any security incident or weakness must be reported immediately.' },
        ]
      },
      {
        title: 'Camera & Mobile Phone Policy',
        image: 'camera-mobile.png',
        objective: 'To provide guidelines about usage of cameras and mobile phones in office.',
        scope: 'All employees of iDynamics Software Pvt Ltd. working in center/s based in India.',
        sections: [
          { list: ['No person shall carry or use a camera in the workplace', 'No person shall use a camera phone to photograph or video any co-worker', 'Mobile phones should be in silent mode during office hours', 'Avoid using mobile phones to listen to songs during working hours', 'Disciplinary action will be taken for violations'] },
        ]
      },
      {
        title: 'Malicious Software Security',
        image: 'malicious-software.png',
        objective: 'To protect iDynamics information assets from viruses and other malicious software.',
        scope: 'All employees of iDynamics Software Pvt Ltd. — compliance is mandatory.',
        sections: [
          { heading: 'Protection Rules', list: ['Only tested and approved programs may be installed', 'Report any failed virus check to Information Services immediately', 'Ensure virus-checking software is running on your workstation', 'Recovery from malicious attacks is handled only by IT department', 'Virus checking software must not be disabled'] },
        ]
      },
      {
        title: 'Physical Security',
        image: 'physical-security.png',
        objective: 'To protect confidentiality, integrity and availability of information assets by preventing unauthorized physical access.',
        scope: 'All employees of iDynamics Software Pvt Ltd. — compliance is mandatory.',
        sections: [
          { heading: 'Secure Areas', list: ['Physical access to IT systems must be restricted to authorized employees', 'All facilities with servers must be locked at all times', 'Third party personnel must be supervised at all times'] },
          { heading: 'Workstation Rules', list: ['Lock workstation (Ctrl+Alt+Delete) before leaving your area', 'Shut down workstation and monitors before leaving premises', 'All workstations must have a visible security tag as iDynamics property'] },
          { heading: 'Removable Media', list: ['Removable media with confidential information must be encrypted', 'Uncontrolled connection of storage devices is strictly forbidden', 'Loss or theft of media must be reported to IT immediately'] },
        ]
      },
    ]
  },
];

// ─── ACCORDION COMPONENT ─────────────────────────────────────────
const PolicyAccordion = ({ title, image, objective, scope, sections, isOpen, onToggle }) => {
  const [imgError, setImgError] = React.useState(false);
  const imgSrc = image ? new URL(`./assets/${image}`, import.meta.url).href : null;

  return (
    <div className={`pol-accordion ${isOpen ? 'pol-accordion--open' : ''}`}>
      <button className="pol-accordion__trigger" onClick={onToggle}>
        <h3 className="pol-accordion__title">{title}</h3>
        <ChevronRight size={18} className="pol-accordion__chevron" />
      </button>
      <div className="pol-accordion__body">
        <div className="pol-accordion__content">

          {/* Policy Image Holder */}
          <div className="pol-accordion__img-holder">
            {imgSrc && !imgError ? (
              <img
                src={imgSrc}
                alt={title}
                className="pol-accordion__img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="pol-accordion__img-placeholder">
                <span>📄</span>
                <p>Image: {image || 'N/A'}</p>
              </div>
            )}
          </div>

          {/* Objective */}
          <div className="pol-accordion__objective">
            <p className="pol-accordion__objective-label">Objective</p>
            <p className="pol-accordion__objective-text">{objective}</p>
          </div>

          {/* Scope */}
          <p className="pol-accordion__scope">Scope: {scope}</p>

          {/* Content sections */}
          {sections.map((sec, i) => (
            <div key={i}>
              {sec.heading && <h4 className="pol-accordion__subheading">{sec.heading}</h4>}
              {sec.text && sec.text.split('\n\n').map((para, j) => (
                <p key={j} className="pol-accordion__text">{para}</p>
              ))}
              {sec.list && (
                <ol className="pol-accordion__list">
                  {sec.list.map((item, k) => <li key={k}>{item}</li>)}
                </ol>
              )}
              {sec.note && <p className="pol-accordion__text"><em>{sec.note}</em></p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────
const PoliciesPage = ({ onBack }) => {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(policyCategories[0].id);
  const categoryRefs = useRef({});

  // Toggle accordion
  const toggle = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Scroll observer for sidebar active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    policyCategories.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pol-wrapper"
    >
      {/* TOP BAR */}
      <div className="pol-topbar">
        <div className="pol-container">
          <motion.button
            onClick={onBack}
            className="pol-back-btn"
            whileHover={{ scale: 1.03, x: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <ArrowLeft size={16} /> Back to Portal
          </motion.button>
        </div>
      </div>

      {/* HERO */}
      <section className="pol-hero">
        <div className="pol-hero__glow" />
        <div className="pol-hero__glow pol-hero__glow--alt" />
        <div className="pol-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="pol-hero__inner"
          >
            {/* <span className="pol-hero__badge">Company Policies</span> */}
            <h1 className="pol-hero__title">Workplace Policies</h1>
            <p className="pol-hero__desc">Everything you need to know about our workplace guidelines, procedures, and standards.</p>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <div className="pol-container">
        <div className="pol-body">
          {/* SIDEBAR */}
          <motion.nav
            className="pol-sidebar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="pol-sidebar__title">Quick Navigation</p>
            {policyCategories.map(cat => (
              <button
                key={cat.id}
                className={`pol-sidebar__link ${activeCategory === cat.id ? 'pol-sidebar__link--active' : ''}`}
                onClick={() => scrollToCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </motion.nav>

          {/* MAIN CONTENT */}
          <main className="pol-main">
            {policyCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.id}
                id={cat.id}
                className="pol-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.05 }}
              >
                {/* Category header */}
                <div className="pol-category__header">
                  <span className="pol-category__label">{cat.label}</span>
                  <div className="pol-category__line" />
                </div>

                {/* Accordion items */}
                {cat.policies.map((policy, polIndex) => {
                  const key = `${cat.id}-${polIndex}`;
                  return (
                    <PolicyAccordion
                      key={key}
                      title={policy.title}
                      image={policy.image}
                      objective={policy.objective}
                      scope={policy.scope}
                      sections={policy.sections}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </motion.div>
            ))}

            {/* DISCLAIMER */}
            <div className="pol-disclaimer">
              <h4 className="pol-disclaimer__title">Disclaimer</h4>
              <p className="pol-disclaimer__text">
                iDynamics Software Pvt Ltd, Trivandrum, India reserves the right in its absolute discretion to
                abolish any Policy at any time or to alter the terms and conditions. Such discretion may be exercised
                any time before, during, and after the Policy year is completed. Employees will be notified of any changes.
              </p>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
};

export default PoliciesPage;
