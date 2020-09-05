const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '저는 우수한 봇 입니다!' }, status: 'online' })
});


client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '돌틴' )

  {

    return message.reply('참 우수한사람');
  };
  
  if(message.content == '발파루크참전' )

  {

    return message.reply('https://cdn.discordapp.com/attachments/606471620802117632/751368178898173972/16e31e8997143091.png');
  };

  if(message.content == '자러간다' )
  
{
  return message.reply('https://tenor.com/view/funny-animals-cat-kisses-gif-12243490')
};
  if(message.content == '자러감' )
    
  {
    return message.reply('잘자')
  };

  if(message.content == '최지우'){
    let img = 'https://cdn.discordapp.com/attachments/751302825778085907/751461568604274713/unnamed.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('세계 최초 인간 SCP "케테르(Keter)" 등급')
      .setURL('https://namu.wiki/w/SCP%20%EC%9E%AC%EB%8B%A8/%EC%BC%80%ED%85%8C%EB%A5%B4')
      .setAuthor('"그는 무력으로 세계 정상에 오를 수 있다" - CSB(진압요원)', img, 'https://namu.wiki/w/%ED%97%9B%EC%86%8C%EB%A6%AC')
      .setThumbnail(img)
      .addBlankField()
      .addField('- 그의 역사 -', '삼단봉으로 성 안드레아 진압요원 다수를 살해 후 도주\n그 현장에서 살아남은 HDK 요원의 한 마디\n"아무 저항도 할 수 없었다"\n하지만 1급 진압요원 "CSB" 요원으로 인해 다시 격리실 행\n그 후 얼마 지나지 않아 CSB 요원에게 고가의 게임 선물을\n공세하고 안전하게 격리실을 탈출 했다고 전해진다.\n괴물의 특징으로는 팔에는 용문신이 있고 너클 장갑을\n끼고 다니며 못이 박힌 야구배트를 항상 소지하고 다닌다\n\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('from 우수한 봇', img)
      
      message.channel.send(embed)
  }


  if(message.content == '성안드레아'){
    let img = 'https://cdn.discordapp.com/attachments/751302825778085907/751394690472869898/bandicam_1184.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('조선 최초 "최지우(Dol Tin)" 격리시설')
      .setURL('http://www.standrew.co.kr/')
      .setAuthor('"성안드레아 공식 사이트"', img, 'http://www.standrew.co.kr/')
      .setThumbnail(img)
      .addBlankField()
      .addField('- 업적 -', '2번 실험체 "DolTin" 분노조절장애 완치\n3번 실험체 "채히" 컨테이너 제공\n2번 실험체 "DolTin" 간질병 완치\n2번 실험체 "DolTin"의 기본상식 습득\n1번 실험체 "STG" 경기도의 한 중학교 특별반으로 이송\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('from 우수한 봇', img)
      
      message.channel.send(embed)
  }

  if(message.content == '김대중'){
    let img = 'https://cdn.discordapp.com/attachments/751302825778085907/751655186883280998/5e35721d42326b7cf6f8c905c58ec666_11236293615.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('"DJ대중 - 힙조인시티 (HIP JOINT CITY)"')
      .setURL('https://www.youtube.com/watch?v=iMB8AlSaLRA')
      .setAuthor('"Go down fighting to the end"', img, 'https://namu.wiki/w/%ED%99%8D%EC%96%B4')
      .setThumbnail(img)
      .addBlankField()
      .addField('대표적인 DJ대중의 표절곡', '')
      .addField('DJ대중 - 힙조인시티', 'MC무현 - 응디시티 표절', true)
      .addField('DJ대중 - Up Down', 'MC무현 - 위 아래 표절', true)
      .addField('DJ대중 - 토요일밤', 'MC무현 - 금요일 밤 표절', true)
      .addField('DJ대중 히트곡 정리', 'DJ대중 - Excuse Me\nMC무현 - Yeah (Feat. DJ대중)\nMC무현 - BAND (feat. DJ대중, J.Tank, MC재앙)\nMC무현 - K/DA (Feat. DJ대중)\nMC무현 - MC무현 (Ft. Dj대중, J.Tank)\n\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('from 우수한 봇', img)

      message.channel.send(embed)
  }

  if(message.content == '노무현'){
    let img = 'https://cdn.discordapp.com/attachments/751302825778085907/751392197630230588/hqdefault.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('"MC무현 대 히트곡"')
      .setURL('https://www.youtube.com/watch?v=vYibVU6Wbas&feature=youtu.be')
      .setAuthor('"MC무현 대 히트곡"', img, 'https://www.youtube.com/watch?v=vYibVU6Wbas&feature=youtu.be')
      .setThumbnail(img)
      .addBlankField()
      .addField('MC무현 히트곡 정리', 'MC무현 - 봉하반점\nMC무현 - 작은것들을 위한 시\nMC무현 - K/DA(Tak/Jota)\nMC무현 - TT\nMC무현 - 금요일밤\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('from 우수한 봇', img)

      message.channel.send(embed)
  }



  if(message.content == '문재앙') {
    let img = 'https://cdn.discordapp.com/attachments/751302825778085907/751345991688519700/1586877520.jpeg';
    let embed = new Discord.RichEmbed()
      .setTitle('"MC재앙 대 히트곡"')
      .setURL('https://youtu.be/tZkREJ1buJs')
      .setAuthor('"MC재앙 대 히트곡"', img, 'https://youtu.be/tZkREJ1buJs')
      .setThumbnail(img)
      .addBlankField()
      .addField('MC재앙 히트곡 정리', 'MC재앙 - Counting Moon\nMC재앙 - 대재앙 문재인\nMC재앙 - 대통령 운지법 쓰신다\nMC재앙 - 청와대와 빨갱이\nMC재앙 - 도라에문의 노래\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('from 우수한 봇', img)

    message.channel.send(embed)
  } else if(message.content == '!랙돌') {
    let helpImg = 'https://cdn.discordapp.com/attachments/751302825778085907/751360803952656384/photo-1592652426510-21aa54446dda.png';
    let commandList = [
      {name: '!랙돌', desc: '명령어 도움'},
      {name: '돌틴', desc: '성 안드레아 병원 환자'},
      {name: '!청소 1~100', desc: '채팅 지우기'},
      {name: '!초대코드', desc: '해당 채널의 초대 코드 표기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('명령어', helpImg)
      .setColor('#b87c2e')
      .setFooter(`maker gaon`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
            
          });
        }) 
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);
