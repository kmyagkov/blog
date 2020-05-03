<template>
  <el-container>
    <el-header
      class="page-header"
      height="auto"
    >
      <el-row
        type="flex"
        justify="center"
      >
        <el-col
          :xs="24"
          :md="20"
          :lg="16"
        >
          <el-row
            type="flex"
            justify="space-between"
          >
            <el-col
              :xs="10"
            >
              <a
                :href="photoURL"
                target="_blank"
              >
                <el-image
                  class="page-header__photo"
                  :src="photoURL"
                  fit="cover"
                />
              </a>
            </el-col>
            <el-col class="page-header__info">
              <h1 class="page-header__name">
                Кирилл Мягков
              </h1>
              <h3 class="page-header__profession">
                Frontend-разработчик
              </h3>
              <a class="page-header__link" href="https://github.com/kmyagkov/blog">
                <i class="el-icon-link" />
                GitHub
              </a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="page-main">
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      photoURL: 'https://i.ibb.co/dk01BH0/my-photo.jpg'
    }
  }
}
</script>

<style lang="scss">
.page-header {
  padding: 20px;
  color: var(--secondary-color);
  background: var(--primary-color);
  box-shadow: 0 4px 24px 0 var(--primary-color);
}

.page-header__photo {
  width: 200px;
  height: 200px;
  margin-right: 12px;
  border-radius: 50%;
  border: 2px solid var(--secondary-color);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 400px) {
    width: 80px;
    height: 80px;
  }
}

.page-header__info {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.page-header__name {
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 40px;
    line-height: 56px;
  }
}

.page-header__profession {
  margin-bottom: 12px;
  font-weight: normal;
}

.page-header__link {
  align-self: flex-end;
  margin-top: auto;
  color: inherit;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color .3s;

  &:visited {
    color: inherit;
  }

  &:hover {
    @media (min-width: 1200px) {
      border-color: var(--secondary-color);
    }
  }
}

.page-main {
  padding-top: 40px;
}
</style>
